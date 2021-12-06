const { Pool } = require("pg");
require("dotenv").config();

const db_config = {
  connectionString: process.env.DATABASE_URI,
  // connectionTimeoutMillis: 2000,
  // idleTimeoutMillis: 30000,
  // max: 20,
  // allowExitOnIdle: false,
};

const pool = new Pool(db_config);
console.log("database is connected");

pool.on("connect", (client) => {
  // console.log("database is connected");
});

pool.on("remove", (client) => {
  // console.log("database is removed");
});

module.exports = pool;
