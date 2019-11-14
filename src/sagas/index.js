import { fork } from 'redux-saga/effects';
import watchHomePageSaga from './HomePageSaga';
import watchSearchPageSaga from './SearchSaga';

export default function* rootSagas() {
    yield* [
        fork(watchHomePageSaga),
        fork(watchSearchPageSaga),
    ];
}
