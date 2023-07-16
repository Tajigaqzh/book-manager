const config = {
    secretModule: {
        secretKey: "abcdefghijklmn",
        expiresIn: 60 * 60 * 24 * 7,
        whiteNames: ['/users/login', '/users/register', '/upload/uploadFile']
    },
    databaseModule: {
        host: 'localhost', // 主机名
        port: 3306,        // MySQL 默认端口为 3306
        user: 'root',          // 使用 root 用户登入 MySQL
        password: '123456', // MySQL 密码，用你自己的
        database: 'express_mysql_db', // 使用数据库
        connectTimeout: 5000, //连接超时
    },
    databasePoolModule: {
        host: 'localhost', // 主机名
        port: 3306,        // MySQL 默认端口为 3306
        user: 'root',          // 使用 root 用户登入 MySQL
        password: '123456', // MySQL 密码，用你自己的
        database: 'express_mysql_db', // 使用数据库
        connectTimeout: 5000, //连接超时
        waitForConnections: true, //超过最大连接数，排队
        connectionLimit: 20, //最大连接数
        queueLimit: 0, //最大连接等待数(0为不限制)
        enableKeepAlive: true, //是否长连接
        keepAliveInitialDelay: 30000, //长连接30秒发送一次心跳包
    }
}

module.exports = config