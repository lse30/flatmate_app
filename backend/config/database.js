const mysql = require('mysql2/promise');

let pool = null;

exports.createPool = async function () {
    pool = mysql.createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    })

};

exports.getPool = function () {
    return pool
}