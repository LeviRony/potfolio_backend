const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: '123',
    port: process.env.DB_PORT,
})

pool.on('connect', () => {
    console.log('Connected to the db');

});

module.exports = {
    query: (text, params) => pool.query(text, params),
}


/* connection to db */