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
    var sql = "create table users (id int not null auto_increment primary key, name varchar(50), favourite_product int)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});