import { combineReducers } from 'redux'
import homeReducer from './HomeReducer';
import searchReducer from './SearchReducer';

export default combineReducers({
    homeReducer,
    searchReducer
});