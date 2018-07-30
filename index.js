import { getOrgByEventUserAsync, getJSONAsyncService, getJSONService } from './services/org';
import axios from 'axios';
import { getApi } from './apiUtils';

let orgid = '';
console.log("================ testing promises and async/await =======================");

const event = { properties: { organizationId: "ip_43A43232R3243EW342WF43FE43" }, userid: "5" };

console.log("================ await getOrgByEventUserAsync(event) =======================");
// let orgId = getOrgByEventUserAsync(event).then((data) => {return data;});

var url = 'https://jsonplaceholder.typicode.com/posts';

const axiosTest = axios.get;

function getJSON() {
    // To make the function blocking we manually create a Promise.
    return new Promise(function (resolve) {
        axios.get(url + `/${event.userid}`)
            .then(function (json) {
                // The data from the request is available in a .then block
                // We return the result using resolve.
                resolve(json.data.title);
            });
    });
}

async function getJSONAsync() {
    // The await keyword saves us from having to write a .then() block.
    let json = await axios.get(url + `/${event.userid}`);
    // The result of the GET request is available in the json variable.
    // We return it just like in a regular synchronous function.
    return json.data.title;
}



getJSONAsync().then(function (result) {
    console.log("================ getJSONAsync =======================", result);
});

getJSON().then(function (result) {
    console.log("================ getJSON =======================", result);
});

const getApiResult2 = getApi(event).then((result) => {
    this.setState({ users: result.data });
}).catch((e) => {
    return e;
});
console.log('getApiResult2', getApiResult2); //

let testoutside = '';


async function go() {
    try {
        const getApiResult = await getApi(event);
        console.log('getApiResult', getApiResult); //

        testoutside = await getJSONAsync();
        console.log('getJSONAsync testoutside', testoutside); //

        const orgId2 = await getJSONAsyncService(event);
        console.log('getJSONAsyncService', orgId2);

        const orgId3 = await getJSONService(event);
        // const orgId3 =  getJSONService(event).then((data) => Promise.resolve(data));
        console.log('getJSONService', orgId3);

        const orgId4 = await getOrgByEventUserAsync(event);
        console.log('getOrgByEventUserAsync', orgId4); //      
        // then we grab some data over an Ajax request
        const wes = await axios('https://api.github.com/users/wesbos');
        console.log(wes.data.node_id); // mediocre code
        //   // many requests should be concurrent - don't slow things down!
        //   // fire off three requests and save their promises
        //   const wordPromise = axios('http://www.setgetgo.com/randomword/get.php');
        //   const userPromise = axios('https://randomuser.me/api/');
        //   const namePromise = axios('https://uinames.com/api/');
        //   // await all three promises to come back and destructure the result into their own variables
        //   const [word, user, name] = await Promise.all([wordPromise, userPromise, namePromise]);
        //   console.log(word.data, user.data, name.data); // cool, {...}, {....}
    } catch (e) {
        console.error(e); // 💩
    }
}

go();

// try {
//     const orgId = getOrgByEventUserAsync(event).then((data) => {
//         return data;
//     }).catch();
//     console.log('getOrgByEventUserAsyncOutside', orgId); //      
// } catch (e) {
//     console.error(e); // 💩
// }

