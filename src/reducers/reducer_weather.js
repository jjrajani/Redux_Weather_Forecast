import c from '../actions/constants';

export default function(state = [], action) {
  switch (action.type) {
    case c.FETCH_WEATHER:
      return [ ...state, action.payload.data ];
  }
  return state;
}
