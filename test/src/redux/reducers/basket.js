import {
  ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_ADDRESS, SET_APPOINTMENT,
} from '../actionTypes';

const initialState = {
  prestations: [],
  appointment: '',
  address: '',
  totalPrice: 0,
  totalDuration: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET: {
      const { duration, price, reference } = action.payload;
      return {
        ...state,
        prestations: [...state.prestations, reference],
        totalDuration: state.totalDuration + duration,
        totalPrice: state.totalPrice + price,
      };
    }
    case REMOVE_FROM_BASKET: {
      const { duration, price, reference } = action.payload;
      const index = state.prestations.indexOf(reference);

      if (index >= 0) {
        const prestations = state.prestations.slice();
        prestations.splice(index, 1);
        return {
          ...state,
          prestations,
          totalDuration: state.totalDuration - duration,
          totalPrice: state.totalPrice - price,
        };
      }
      return state;
    }
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_APPOINTMENT:
      return {
        ...state,
        appointment: action.payload,
      };
    default:
      return state;
  }
}
