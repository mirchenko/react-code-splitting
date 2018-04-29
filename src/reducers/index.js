import { combineReducers } from 'redux';
import Countries from "./countries";
import Country from "./Country";

export default combineReducers({
  countries: Countries,
  country: Country,
});