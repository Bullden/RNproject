import {GET_DATA_API} from '../actionNames/getDataApi';
import {SHARE_MODAL} from '../actionNames/modal';

export function shareModal(data) {
  return {type: SHARE_MODAL, data};
}
