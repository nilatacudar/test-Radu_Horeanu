import { ADD_CATALOG } from '../actionTypes';

export default function (state = null, action) {
  switch (action.type) {
    case ADD_CATALOG:
      return action.payload;
    default:
      return state;
  }
}
