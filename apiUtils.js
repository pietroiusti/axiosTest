// apiUtils.js
import axios from 'axios';
// import handleError from './handleError';
var url = 'https://jsonplaceholder.typicode.com/posts';

// const SERVER_DOMAIN = process.env.SERVER_DOMAIN;
const getHeaders = () => {
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };
};
// HTTP GET Request - Returns Resolved or Rejected Promise
export const getApi = (event) => {
    return new Promise((resolve, reject) => {
        axios.get(url + `/${event.userid}`, getHeaders())
            .then(response => { resolve(response.data.title) })
            .catch(error => { reject(error) });
    });
};

// // HTTP PATCH Request - Returns Resolved or Rejected Promise
// export const patch = (path, data) => {
//     return new Promise((resolve, reject) => {
//         axios.patch(`${SERVER_DOMAIN}${path}`, data, getHeaders())
//             .then(response => { resolve(response) })
//             .catch(error => { reject(handleError(error)) });
//     });
// };
// // HTTP POST Request - Returns Resolved or Rejected Promise
// export const post = (path: string, data: any) => {
//     return new Promise((resolve, reject) => {
//         axios.post(`${SERVER_DOMAIN}${path}`, data, getHeaders())
//             .then(response => { resolve(response) })
//             .catch(error => { reject(handleError(error)) });
//     });
// };
// // HTTP DELETE Request - Returns Resolved or Rejected Promise
// export const del = (path: string) => {
//     return new Promise((resolve, reject) => {
//         axios.delete(`${SERVER_DOMAIN}${path}`, getHeaders())
//             .then(response => { resolve(response) })
//             .catch(error => { reject(handleError(error)) });
//     });
// };
