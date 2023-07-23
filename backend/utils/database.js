const Pool = require("pg").Pool;

const pool = new Pool({
  name: "postgres",
  host: "localhost",
  database: "chat-app",
  password: "1234",
  port: 5430,
});

module.exports = pool;
