const mysql = require('mysql')
const { MYSQL_CONFIG, REDIS_CONFIG } = require('../config/db')

// 创建连接对象
// const con = mysql.createConnection(MYSQL_CONFIG)
console.log('MYSQL_CONFIG--',MYSQL_CONFIG,REDIS_CONFIG)
const con = mysql.createConnection(
    MYSQL_CONFIG
)

//开始连接
con.connect()

//统一执行sql函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, res) => {
            if (err) {
                reject(err)
                return
            }
            resolve(res)
        })
    })
    return promise
}

module.exports = {
    exec,
    escape: mysql.escape
}

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   port     : 3306,
//   database : 'node-blog'
// });

// connection.connect();

// connection.query('SELECT * from blog;', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

// connection.end