const mysql = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mozila1995',
  database : 'CentralDeBemEstar'
});

db.connect();


module.exports = db
