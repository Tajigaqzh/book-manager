const { Sequelize } = require("sequelize")
const config = require('./commonConfig').databaseModule


const mysql = new Sequelize(config.database, config.user, config.password, {
    dialect: 'mysql',       // 这里可以改成任意一种关系型数据库
    host: config.host,      // 数据库服务器
    timezone: '+08:00',     // 这里是东八区，默认为0时区
    pool: {                 // 使用连接池
        max: 20,
        min: 5,
        acquire: 30000,
        idle: 10000,
    },
});

module.exports = mysql
