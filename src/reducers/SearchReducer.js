import {
    SEARCH_REQUEST,
    RESET_SEARCH,
} from '../actionTypes/SearchActionTypes';

const INITIAL_STATE = {
    data: {},
    isSearch: false,
    error: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_REQUEST: {
            return { ...state, data: action.payload }
        }
        case RESET_SEARCH:
            return { state }
        default:
                return state
    }
}