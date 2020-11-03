import {combineReducers} from 'redux';
import {dataApiReducer} from './reducers/getDataApi';
import {modalReducer} from './reducers/modal';
// import { photoReducer } from './reducers/UploadPhoto';

const rootReducer = combineReducers({
  api: dataApiReducer,
  modal: modalReducer,
});

export default rootReducer;
