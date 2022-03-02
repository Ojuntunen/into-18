const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'arvuser',
  password: 'arvpass',
  database: 'arviointi'
});
module.exports = connection;