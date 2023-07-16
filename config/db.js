const mysql = require('mysql2')


const config = require('./commonConfig').databaseModule
const configPool = require('./commonConfig').databasePoolModule
let pool1 = mysql.createPool(configPool)
// let conn = mysql.createConnection(config)
let pool2 = mysql.createPool(configPool)


/*let connection = (sql, params) => {
    return new Promise((resolve, reject) => {
        let closeMysql = conn => conn.end(err => {
            if (err) throw err
        })
        conn.connect((err, conn) => {
            err ? reject(err) : conn.query(sql, params, (err, data, fields) => {
                err ? reject(err) : resolve(data)
            })
            closeMysql(conn);
        })
    })
}*/
let poolConnection = (sql, params) => {
    return new Promise((resolve, reject) => {
        // 连接池（保持连接）
        pool1.getConnection((err, conn) => {
            if (err) {
                reject(err)
            } else {
                conn.query(sql, params, (err, data, fields) => {
                    err ? reject(err) : resolve(data)
                })
                conn.release() // 释放连接
            }
        })
    })
}


// pool('insert into user(name,password) value("111","222")').then((data) => {
//     console.log(data)
//     // res.send(data)
// }).catch((err) => {
//     console.error(err)
//     // res.send(err)
// })

// 事务
const execTransaction = (sqlArr) => {
    return new Promise((resolve, reject) => {
        let promiseArr = [];
        pool2.getConnection(function (err, connection) {
            if (err) {
                return reject(err);
            }
            connection.beginTransaction((err) => {
                if (err) {
                    return reject("开启事务失败");
                }
                // 将所有需要执行的sql封装为数组
                promiseArr = sqlArr.map(({ sql, values }) => {
                    return new Promise((resolve, reject) => {
                        connection.query(sql, values, (e, rows, fields) => {
                            e ? reject(e) : resolve(rows);
                        });
                    });
                });
                // Promise调用所有sql，一旦出错，回滚，否则，提交事务并释放链接
                Promise.all(promiseArr)
                    .then((res) => {
                        connection.commit((error) => {
                            if (error) {
                                console.log("事务提交失败");
                                reject(error);
                            }
                        });
                        connection.release(); // 释放链接
                        resolve(res);
                    })
                    .catch((err) => {
                        connection.rollback(() => {
                            console.log("数据操作回滚");
                        });
                        reject(err);
                    });
            });
        });
    });
};
module.exports = { poolConnection, execTransaction }
