var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");

    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ?';

    con.query(sql, [adr], function (err, result) {
        if(err) throw err;
        console.log(result);
    });
});