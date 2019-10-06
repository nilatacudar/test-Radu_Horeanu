import { combineReducers } from 'redux';
import catalog from './catalog';
import basket from './basket';

export default combineReducers({catalog, basket});