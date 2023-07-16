const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const fs = require("fs");
const { expressjwt: jwt } = require("express-jwt");
const config = require("./config/commonConfig");


const usersRouter = require('./routes/users');
const editorRouter = require('./routes/editor');

const options = require('./config/swaggerConfig');




const app = express();

const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(options)

// 配置解析 application/json 格式数据的内置中间件
app.use(express.json())
// 配置解析application/x-www-form-urlencoded 格式数据的内置中间件
app.use(express.urlencoded({ extended: false }));



app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// 自定义token
morgan.token('localDate', function getDate(req) {
  let date = new Date();
  return date.toLocaleString()
})

// 自定义format，其中包含自定义的token
morgan.format('combined', ':remote-addr - :remote-user [:localDate] :method :status :url HTTP/:http-version :res[content-length] :referrer :user-agent');

app.use(morgan('dev'));

app.use(morgan('combined', {
  stream: fs.createWriteStream(path.join(__dirname, "./log/access.log"), { flags: 'a',immediate:false })
}))

app.use(jwt({
  secret: config.secretModule.secretKey,
  // 生成 token 时的钥匙，必须和生成 token 时设置的统一
  algorithms: ['HS256'],  // 必填，加密算法
}).unless({
  path: config.secretModule.whiteNames // 除了这些接口，其他都需要认证
}))

app.use('/users', usersRouter);
app.use('/editor', editorRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  switch (err.status) {
    case 401:
      if (req.headers.authorization) {
        res.json({ code: 401, msg: 'token失效' })
      } else {
        res.json({ code: 401, msg: '没有token，请登录' })
      }
      break;
    case 403:
      res.json({ code: 403, msg: '没有权限' })
      break;
    case 404:
      // console.log()
      res.json({ code: 404, msg: '无该访问资源' })
      break;
    default:
      res.json({ code: 500, msg: '服务器错误' })
  }

});




module.exports = app;
