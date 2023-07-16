const express = require('express');
const router = express.Router();
const { login,register } = require("../service/userService.js");

/**
 * 用户注册
 * @route POST /users/register
 * @group user - 用户相关操作
 * @description 用户注册
 * @param {string} username.path.required - username
 * @param {number} password.path.required - password
 * @returns {object} 200 - {code: 200, msg: '注册成功',data: {token: string}}
 * @returns {Error} 400 - {code: 400, msg: '注册失败'}
 */
router.post("/register", function (req, res, next) {
  register(req, res).catch(err => {
    res.json({ code: 400, msg: '注册失败' })
  })
})

/**
 * 用户登录
 * @route POST /users/login
 * @group user - 用户相关操作
 * @description 用户登录
 * @param {string} username.path.required - username
 * @param {number} password.path.required - password
 * @returns {object} 200 - {code: 200, msg: '登录成功',data: {token: string}}
 * @returns {Error} 400 - {code: 400, msg: '登录失败'}
 */
router.post('/login', function(req, res, next) {
  // console.log(req)
  login(req, res).catch(err => {
    console.log(err)
    res.json({ code: 400, msg: '登录失败' })
  })
});

module.exports = router;
