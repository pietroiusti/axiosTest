import axios from 'axios';

var url = 'https://jsonplaceholder.typicode.com/posts';

export const getOrgByEventUserAsync = async (event) => {
    const orgData = await axios.get(url + `/${event.userid}`);
      return orgData.data.title;
};

export const getJSONAsyncService = async (event) => {
    // The await keyword saves us from having to write a .then() block.
    let json = await axios.get(url + `/${event.userid}`);
    // The result of the GET request is available in the json variable.
    // We return it just like in a regular synchronous function.
    return json.data.title;
};

export const getJSONService = (event) => {
    // To make the function blocking we manually create a Promise.
    return new Promise( function(resolve) {
        axios.get(url + `/${event.userid}`)
            .then( function(json) {
                // The data from the request is available in a .then block
                // We return the result using resolve.
                resolve(json.data.title);
            });
    });
};
