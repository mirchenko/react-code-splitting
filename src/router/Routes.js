import React from 'react';
import Loadable from 'react-loadable';

const loading = () => <div>Loading...</div>;


const Countries = Loadable({
  loader: () => import('../components/Countries'),
  loading,
});

const Country = Loadable({
  loader: () => import('../components/Country'),
  loading
});

export default [
  {
    component: Countries,
    path: '/',
    exact: true
  },
  {
    component: Country,
    path: '/:name'
  }
];