import { takeLatest, put, select} from 'redux-saga/effects';
import _get from 'lodash/get';
import {
    SEARCH_REQUEST,
    SEARCH_REQUEST_SUCCESS,
    SEARCH_REQUEST_FAILURE,
} from '../actionTypes/SearchActionTypes';


export function* fetchSearchData(action) {
    try {
        const context = state => state.homeReducer;
        const store = yield select(context);
        const hotelsData = _get(store, 'data', []);
        console.log(hotelsData);
        console.log(action);
        //TO DO FIlter Action will be here
        // After filter data will placed to SEARCH_REQUEST_SUCCESS reducer
        // Then we can do the manipulation from search reducer
    } catch (error) {
        yield put({ type: SEARCH_REQUEST_FAILURE, error });
    }
}

export default function* watchSearchPageSaga() {
    yield takeLatest(SEARCH_REQUEST, fetchSearchData);
}

