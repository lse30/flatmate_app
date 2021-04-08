const db = require('../../config/database')


exports.getAllUsers = async function() {
    const conn = await db.getPool().getConnection();
    const query = 'SELECT * FROM users'
    const [ rows ] = await conn.query(query);
    conn.release();
    return rows
}

exports.checkEmail = async function( email ) {
    const conn = await db.getPool().getConnection();
    const query = 'SELECT email FROM users WHERE email = ?';
    const [ rows ] = await conn.query( query, [ email ] );
    conn.release();
    return rows;
};

exports.insert = async function( values ) {
    const conn = await db.getPool().getConnection();
    const query = 'INSERT INTO users (first_name, surname, email, password) VALUES ( ? )';
    const [ result ] = await conn.query( query, [ values ]  );
    conn.release();
    return result;
};

exports.checkCredentials = async function( credentials ) {
    const conn = await db.getPool().getConnection();
    const query = 'SELECT password FROM users WHERE email = ?';
    const [ rows ] = await conn.query( query, [ credentials[0] ] );
    conn.release();
    if (rows.length === 0) {
        return false;
    } else {
        // let password = rows[0].password;
        // return passwordHash.verify(credentials[1],password);
        return credentials[1] === rows[0].password
    }
};

exports.logIn = async function( credentials, token ) {
    const conn = await db.getPool().getConnection();
    const query = 'UPDATE users SET auth_token = ? WHERE email = ?';
    await conn.query( query, [ token, credentials[0] ]  );
    conn.release();
};

exports.findUserIdByToken = async function( token ) {
    const conn = await db.getPool().getConnection();
    const query = 'SELECT user_id FROM users WHERE auth_token = ?';
    const [ result ] = await conn.query( query, [ token ]  );
    conn.release();
    return result;
};

exports.getName = async function( id ) {
    const conn = await db.getPool().getConnection();
    const query = 'SELECT first_name, surname FROM users WHERE user_id = ?';
    const [ rows ] = await conn.query( query, [ id ] );
    conn.release();
    return rows;
};