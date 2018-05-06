import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import Routes from '../src/router/Routes';
import stats from '../react-loadable.json';

export default (pathname, store, context) => {
  let modules = [];
  const content = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={store}>
        <StaticRouter location={pathname} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  );

  let bundles = getBundles(stats, modules);

  return `
  <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/styles.css">
        <title>Title</title>
      </head>
      <body>
      
      <div id="app">${content}</div>
      <script>
        window.INITIAL_STATE = ${JSON.stringify(store.getState())}
      </script>

     
         
      <script src="/vendor.js"></script>
            ${bundles.map(bundle => {
    return `<script src="/${bundle.file}"></script>`}).join('\\n')}
            <script src="/app.js"></script>
         
      </body>
      </html>
  `;
  };