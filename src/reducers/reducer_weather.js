import Constants from '../constants/';

export default function(state = [], action) {
  switch (action.type) {
    case Constants.FETCH_WEATHER:
      return  [
        action.payload.data,
        ...state
      ]
  }
  return state;
}