const Editor = require("../model/EditorModel");
const Op = require('sequelize').Op;


async function addEditor(req, res) {
    await Editor.create(req.body.editor).then((p) => {
        res.json({ code: 200, msg: '添加成功' })
    }).catch((err) => {
        console.log(err.name, err.message);
        res.json({ code: 400, msg: err.message + "添加失败，请检查输入的格式是否正确" })
    })
}

async function deleteEditor(req, res) {
    await Editor.destroy({
        where: {
            workNumber: req.query.workNumber
        }
    }).then((p) => {
        res.json({ code: 200, msg: '删除成功' })
    }).catch((err) => {
        res.json({ code: 400, msg: err.message + "删除失败" })
    })
}
async function deleteAllEditor(req, res) {
    Editor.sequelize.transaction(async (t) => {
        req.query.workNumber.forEach(async (item) => {
            await Editor.destroy({
                where: {
                    workNumber: item
                }
            })
        }, { transaction: t }).catch((err) => {
            t.rollback();
            res.json({ code: 400, msg: err.message + "删除失败" })
        })
    }).then((p) => {
        res.json({ code: 200, msg: '删除成功' })
    })
}

async function updateEditor(req, res) {
    await Editor.update(req.body.editor, {
        where: {
            workNumber: req.body.editor.workNumber
        }
    }).then((p) => {
        res.json({ code: 200, msg: '更新成功' })
    }).catch((err) => {
        res.json({ code: 400, msg: err.message + "更新失败" })
    })
}

async function getEditors(req, res) {
    await Editor.findAll({
        limit: req.query.pageSize ? req.query.pageSize : 10,
        offset: req.query.pageNum ? req.query.pageNum : 0

    }).then((p) => {
        if (p.length == 0) {
            res.json({ code: 400, msg: '没有数据', data: p })
        } else {
            res.json({ code: 200, msg: '获取成功', data: p })
        }
    }).catch((err) => {
        res.json({ code: 400, msg: err.message + "获取失败" })
    })
}
/**
 * 名字模糊查询
 * @param {*} req 
 * @param {*} res 
 */
async function getEditorByName(req, res) {
    let name = req.query.name;
    let where = {};
    if (name) {
        where.name = {
            [Op.like]: '%' + name + '%'
        }
    }
    await Editor.findAll({
        order: ['workNumber'],
        where: where
    }).then((p) => {
        if (p.length == 0) {
            res.json({ code: 400, msg: '没有数据', data: p })
        } else {
            res.json({ code: 200, msg: '获取成功', data: p })
        }
    }).catch((err) => {
        res.json({ code: 400, msg: err.message + "获取失败" })
    })
}
async function getEditorByWorkNumber(req, res) {
    await Editor.findOne({
        where: {
            workNumber: req.query.workNumber
        }
    }).then((p) => {
        if (p == null) {
            res.json({ code: 400, msg: '没有数据', data: p })
        } else {
            res.json({ code: 200, msg: '获取成功', data: p })
        }
    }).catch((err) => {
        res.json({ code: 400, msg: err.message + "获取失败" })
    })
}

/**
 * 根据小组id查询
 * @param {*} req 
 * @param {*} res 
 */
async function getEditorByGroupId(req, res) {
    await Editor.findAll({
        where: {
            groupId: req.query.groupId
        },
        limit: req.query.pageSize ? req.query.pageSize : 10,
        offset: req.query.pageNum ? req.query.pageNum : 0
    }).then((p) => {
        res.json({ code: 200, msg: '获取成功', data: p })
    }).catch((err) => {
        res.json({ code: 400, msg: err.message + "获取失败" })
    })
}

module.exports = {
    addEditor,
    deleteEditor,
    deleteAllEditor,
    updateEditor,
    getEditors,
    getEditorByName,
    getEditorByWorkNumber,
    getEditorByGroupId
}