const postgres = require('../config/postgres');

async function getAllSystemsSQL() {
    const result = await postgres.query('SELECT * FROM systems');
    return result.rows;
}

async function getSystemByIdSQL(id) {
    const QUERY = 'SELECT * FROM systems WHERE sys_id = $1';
    const result = await postgres.query(QUERY, [id]);
    return result.rows[0];
}

module.exports = {
    getAllSystemsSQL,
    getSystemByIdSQL,
}