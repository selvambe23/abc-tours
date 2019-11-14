import {
    SEARCH_REQUEST,
} from '../actionTypes/SearchActionTypes';

export const searchFormRequest = (payload={}) => ({
    type: SEARCH_REQUEST,
    payload,
});