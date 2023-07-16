/**
 * @description: 用户相关的业务逻辑处理
 * 登录、注册、修改密码、修改用户信息、获取用户信息、获取用户列表、删除用户
 */
const { poolConnection } = require("../config/db");
const { notNullArray, notExist } = require("../utils/common");
const { compare, encode } = require("../utils/bcrypt");
const { generateToken } = require("../utils/token");


async function login(req, res) {
    let { username, password } = req.body;
    console.log(req.body);
    if (notExist(username) || notExist(password)) {
        return res.json({ code: 400, msg: '用户名或密码不能为空' })
    }
    let decodePassword = await poolConnection("select password from user where username = ?", [username])
    if (notNullArray(decodePassword)) {
        let result = await compare(password, decodePassword[0].password)
        if (result) {
            return res.json({ code: 200, msg: '登录成功', data: { token: generateToken(username) } })
        } else {
            return res.json({ code: 400, msg: '用户名和密码不匹配，请检查后重新输入' })
        }
    } else {
        return res.json({ code: 400, msg: '用户名不存在' })
    }
}

async function register(req, res) {
    let { username, password } = req.body;
    if (notExist(username) || notExist(password)) {
        return res.json({ code: 400, msg: '用户名或密码不能为空' })
    }

    let result = await poolConnection("select * from user where username = ?", [username])
    if (result.length > 0) {
        return res.json({ code: 400, msg: '用户名已存在' })
    }
    let hashPassword = await encode(password)
    let result2 = await poolConnection("insert into user(username,password) value(?,?)", [username, hashPassword])
    if (result2.affectedRows > 0) {
        return res.json({ code: 200, msg: '注册成功' })
    }
    return res.json({ code: 400, msg: '注册失败' })
}

module.exports = {
    login,
    register
}