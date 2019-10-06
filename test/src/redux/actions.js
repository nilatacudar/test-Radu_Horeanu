import { ADD_CATALOG, ADD_TO_BASKET, SET_APPOINTMENT, SET_ADDRESS, REMOVE_FROM_BASKET } from './actionTypes';

export const addCatalog = (catalog) =>({
    type: ADD_CATALOG,
    payload: catalog
});

export const addToBasket = (prestation) => ({
    type: ADD_TO_BASKET,
    payload: prestation
});

export const removeFromBasket = (prestation) => ({
    type: REMOVE_FROM_BASKET,
    payload: prestation
});

export const setAppointment = (date) =>({
    type: SET_APPOINTMENT,
    payload: date
});

export const setAddress = (address) =>({
    type: SET_ADDRESS,
    payload: address
});