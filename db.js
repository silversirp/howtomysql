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
    var sql = "create table products (id int not null primary key, name varchar(50))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});