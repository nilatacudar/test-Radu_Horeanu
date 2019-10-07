import { ADD_CATALOG } from '../actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_CATALOG:
      return action.payload;
    default:
      return state;
  }
}
