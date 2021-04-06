const db = require('../../config/database')


exports.getAllUsers = async function() {
    const connection = await db.getPool().getConnection();
    const query = 'SELECT * FROM users'
    const [ rows ] = await connection.query(query);
    connection.release();
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