const postgres = require('../config/postgres');

async function getAllSkillsSQL() {
    const result = await postgres.query('SELECT skill_id AS id, skill_name, skill_rating FROM skills;');
    return result.rows.map(row => ({
        ...row,
        skill_rating: +row.skill_rating
    }))
}

async function getSkillByIdSQL(id) {
    const QUERY = ('SELECT skill_id AS id, skill_name, skill_rating FROM skills WHERE skill_id = $1');
    const result = await postgres.query(QUERY, [id]);
    return result.rows[0];
    
}

module.exports = {
    getAllSkillsSQL,
    getSkillByIdSQL,
}