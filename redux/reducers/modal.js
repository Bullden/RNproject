import {DATA_API_LIST, GET_DATA_API} from '../actionNames/getDataApi';
import {SHARE_MODAL} from '../actionNames/modal';

export const initialState = {
  isModal: '',
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    // case GET_DATA_API: {
    //   return {
    //     ...state,
    //   };
    // }
    case SHARE_MODAL: {
      console.log(action);
      return {
        ...state,
        isModal: action.data,
      };
    }

    default:
      return state;
  }
}
export const modal = (state) => state.modal;
