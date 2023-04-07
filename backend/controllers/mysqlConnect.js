const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dlrladk',
  port: 3306,
  database: process.env.MYSQL_DB,
});
connection.connect();
module.exports = connection;
