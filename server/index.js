import express from 'express';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config';
const expressStaticGzip = require("express-static-gzip");
import Loadable from 'react-loadable';
import render from './render';
import store from '../src/store';
import Routes from '../src/router/Routes';


const PORT = process.env.PORT || 8079;
const app = express();

app.use(
  "/dist",
  expressStaticGzip("dist", {
    enableBrotli: true
  })
);

app.use((req, res, next) => {
  if (/\.js|\.css/.test(req.path)) {
    res.redirect('/dist' + req.path);
  } else {
    next();
  }
});

app.use(
  /\.js$/,
  expressStaticGzip("dist", {
    enableBrotli: true
  })
);
app.get('*', async (req, res) => {
  const actionsTemp = matchRoutes(Routes, req.path).map(({ route }) => !route.component.preload ? route.component : route.component.preload().then(res => res.default));

  const loadedActions = await Promise.all(actionsTemp);
  const actions = loadedActions
    .map(component => component.fetching ? component.fetching({ ...store, path: req.path }) : null)
    .map(async actions => await Promise.all(
      (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
    )
    );


  await Promise.all(actions);
  const context = {};
  const content = render(req.path, store, context);

  res.send(content);
});

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
});

