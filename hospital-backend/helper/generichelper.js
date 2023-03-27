
var mysql = require('mysql2');

function connectdb(){
    var con = mysql.createConnection({
        host: '127.0.0.1',
        password: "",
        user: "root",
        database: "hospitaldb"
    });

    return con
}


function fetchData(sql, callback) {
    let con=connectdb()
    con.connect(function (err) {
        if (err) throw err;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            callback(result);
            con.close();
        });
    });
}

 function add_record(sql, data, callback) {
    let con=connectdb()
 
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        con.query(sql, [data], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    });
}


function update_record(sql, data, callback) {
    let con=connectdb()
 
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        con.query( sql,data, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    });
}
function delete_record(sql, data, callback) {
    let con=connectdb()
 
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        con.query( sql,data, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    });
}
module.exports = { fetchData, add_record,update_record,delete_record}