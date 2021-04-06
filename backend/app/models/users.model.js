const db = require('../../config/database')


exports.getAllUsers = async function() {
    const connection = await db.getPool().getConnection();
    const query = 'SELECT * FROM users'
    const [ rows ] = await connection.query(query);
    connection.release();
    return rows
}