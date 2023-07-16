// 配置 swagger-jsdoc
const options = {
    swaggerDefinition: {
        info: {
            description: '系统API文档',
            title: '管理系统API',
            version: '1.0.0',
        },
        host: 'localhost:3000',//地址
        // basePath: '/v1',//根地址
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        Headers:{
            "Content-Type": "application/json;charset=UTF-8"
        },
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ["../routes/*.js"] //Path to the API handle folder
}
module.exports = options
