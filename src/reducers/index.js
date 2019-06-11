import { combineReducers } from 'redux';
import Countries from "./countries";
import Country from "./country";

export default combineReducers({
  countries: Countries,
  country: Country,
});