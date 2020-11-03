import {put, takeEvery, call} from 'redux-saga/effects';
import {callPhotos} from '../../service/apiService/apiService';
import {DATA_API_LIST, GET_DATA_API} from '../actionNames/getDataApi';

export function* doGetDataApi() {
  yield takeEvery(GET_DATA_API, function* (action) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let randomPage = getRandomInt(10);
    const answerBackend = yield call(
      callPhotos,
      'GET',
      `v2/list?page=${randomPage}&limit=10`,
    );
    const result = answerBackend.data;
    console.log(result);
    yield put({
      type: DATA_API_LIST,
      payload: {
        result,
      },
    });
  });
}

// export function* doGetDrinks() {

//     yield takeEvery(`GET_DRINKS`, function* (action) {
//         let data = action.data.strCategory

//         let current = data.split(' ').join('%20')

//         const answerBackend = yield call(callBackendCategories, 'GET', current)
//         const result = answerBackend.data.drinks
//         yield put( {
//             type: `DRINKS`,
//             payload: {
//                 result,
//                 data
//             }
//         })
//     })
// }
