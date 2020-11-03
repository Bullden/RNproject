import {GET_DATA_API} from '../actionNames/getDataApi';

export function getDataApi(data) {
  return {type: GET_DATA_API, data};
}
