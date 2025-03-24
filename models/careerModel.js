const postgres = require('../config/postgres');

async function getAllCareersSQL() {
    const result = await postgres.query('SELECT * FROM career');
    return result.rows;
}

async function getCareerByIdSQL(id) {
    const QUERY = 'SELECT * FROM career WHERE career_id = $1';
    const result = await postgres.query(QUERY, [id]);
    return result.rows[0];
}

module.exports = {
    getAllCareersSQL,
    getCareerByIdSQL,
}