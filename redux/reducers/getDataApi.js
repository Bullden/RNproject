import {DATA_API_LIST, GET_DATA_API} from '../actionNames/getDataApi';

export const initialState = {
  dataApiList: [],
};

export function dataApiReducer(state = initialState, action) {
  switch (action.type) {
    // case GET_DATA_API: {
    //   return {
    //     ...state,
    //   };
    // }
    case DATA_API_LIST: {
      return {
        ...state,
        dataApiList: action.payload.result,
      };
    }

    default:
      return state;
  }
}
export const api = (state) => state.api;
