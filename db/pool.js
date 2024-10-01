const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "christopher",
    database: "top_users",
    password: "Mrc12598!",
    port: 5432
});