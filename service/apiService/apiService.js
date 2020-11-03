import axios from 'axios';
import {urlPhotos} from '../url/url';

export async function callPhotos(method, path, data, url = urlPhotos.api) {
  const response = await axios(`${url}/${path}`, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Header': '*',
    },
    data: !(method === 'GET') ? JSON.stringify(data) : null,
  });
  return await response;
}

// export async function callBackendCategories(method, path, data, url = urlBackendCatgories.api) {
//     const response = await axios(`${url}=${path}`, {
//         method : method,
//         headers:{
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Header': '*'
//         },
//         data: !(method === "GET") ? JSON.stringify(data) : null
//     })
//     return await response
// }
