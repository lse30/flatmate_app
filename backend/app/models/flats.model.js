const db = require('../../config/database')


exports.addFlat = async function( values ) {
    const conn = await db.getPool().getConnection();
    const query = 'INSERT INTO flats (name, flat_password, administrator) VALUES ( ? )';
    const [ result ] = await conn.query( query, [ values ]  );
    conn.release();
    return result;
};
