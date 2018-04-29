import {
  REQUEST_COUNTRY,
  RECEIVE_COUNTRY
} from "../action/types";

const INITIAL_STATE = {
  name: '',
  nativeName: '',
  flag: '',
  capital: '',
  region: '',
  population: '',
  languages: [],
  isFetching: false,
  lastUpdate: Date.now()
};

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_COUNTRY: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_COUNTRY: {
      return { ...state, isFetching: false, ...action.payload };
    }
    default: return state;
  }
};