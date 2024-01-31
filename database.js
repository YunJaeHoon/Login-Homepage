const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'MCMC0104!',
  database: 'loginHomepage'
});

module.exports = connection;