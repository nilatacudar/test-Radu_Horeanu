import { ADD_TO_BASKET } from '../actionTypes';

const initialState = {
    prestations: [],
    appointment: "",
    address: "",
    totalPrice: 0,
    totalDuration: 0
};

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TO_BASKET:{
            const {duration, price, reference} = action.payload;
            return {
                ...state,
                prestations: [ ...state.prestations, reference],
                totalDuration: state.totalDuration + duration,
                totalPrice: state.totalPrice + price
            };
        };
        default:
            return state;
    }
};