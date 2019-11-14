import {
    SEARCH_REQUEST_SUCCESS,
    SEARCH_REQUEST_FAILURE,
    RESET_SEARCH,
} from '../actionTypes/SearchActionTypes';

const INITIAL_STATE = {
    data: {},
    isSearch: false,
    error: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_REQUEST_SUCCESS: {
            return { 
                ...state,
                isSearch: true,
                data: action.payload
             }
        }
        case SEARCH_REQUEST_FAILURE: {
            return { 
                ...state,
                isSearch: true,
                error: action.payload
             }
        }
        case RESET_SEARCH:
            return { state }
        default:
                return state
    }
}