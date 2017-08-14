var mysql = require('mysql');

var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'Captof#6',
		database: 'burgers_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM burgers', function(err, res){
	console.log(res);
});

process.on('uncaughtException', function(err){
	console.log(err);
})

module.exports = connection;