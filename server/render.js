import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import { Helmet } from "react-helmet";
import Routes from '../src/router/Routes';
import stats from '../react-loadable.json';

export default (pathname, store, context) => {
  const helmet = Helmet.renderStatic();

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
        <meta name="viewport" content="width=device-width, height=device-height,initial-scale=1.0,user-scalable=yes,maximum-scale=5" />
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
        <meta http-equiv="content-language" content="en" />
        <meta http-equiv="" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge,chrome=1" />
        <meta content="yes" name="apple-touch-fullscreen" />
        <noscript>Please enable javascript.</noscript>
        <link rel="stylesheet" href="/styles.css">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.style.toString()}
        ${helmet.script.toString()}
        ${helmet.noscript.toString()} 
      </head>
      <body>
      
      <div id="app">${content}</div>
      <script>
        window.INITIAL_STATE = ${JSON.stringify(store.getState())}
      </script>

     
         
      <script src="/vendor.js"></script>
            ${bundles.map(bundle => {
    return `<script src="/${bundle.file}"></script>`
  }).join('\\n')}
            <script src="/app.js"></script>
         
      </body>
      </html>
  `;
};