require('dotenv').config();
const db = require('./config/database');
const express = require('./config/express')


const app = express();
const port = 4000;


// Test connection to MySQL on start-up
async function testDbConnection() {
    try {
        await db.createPool();
        await db.getPool().getConnection();
    } catch (err) {
        console.error(`Unable to connect to MySQL: ${err.message}`);
        process.exit(1);
    }
}


testDbConnection()
    .then(function () {
        app.listen(port, function () {
            console.log(`Listening on port: ${port}`);
        });
    });

// app.listen(port, function () {
//             console.log(`Listening on port: ${port}`);
//         });