const config = {
    user: 'stefano',
    password: 'St3fan0p!',
    server: 'stefanodb.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'StefanoDatabase',
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

const sql = require('mssql');

// export const getJSONAsyncService = async (event) => {
//     // The await keyword saves us from having to write a .then() block.
//     let json = await axios.get(url + `/${event.userid}`);
//     // The result of the GET request is available in the json variable.
//     // We return it just like in a regular synchronous function.
//     return json.data.title;
// };

const getRecords = async () => {
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('LogId', sql.Int, 111)
            // .output('output_parameter', sql.VarChar(50))
            .execute('[dbo].[uspLogNodeJs]')        
        console.log(result)
    } catch (err) {
        console.log(err);
    }
};

getRecords();

// sql.on('error', err => {
//     // ... error handler
// })