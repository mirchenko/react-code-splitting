import Countries from "../components/Countries";
import Country from "../components/Country";


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