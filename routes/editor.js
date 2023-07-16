const express = require('express');
const router = express.Router();


const { addEditor, deleteEditor, 
    deleteAllEditor, 
    updateEditor,
    getEditors,
    getEditorByName,
    getEditorByWorkNumber,
    getEditorByGroupId } = require("../service/editorService");

/**
 * 添加编辑信息
 * @route POST /editor/add
 * @group editor - 编辑管理
 * @param {string} workNumber.formData.required - 编辑工号10
 * @param {string} name.formData.required - 编辑姓名6
 * @param {gender} gender.formData.required - 编辑性别男or女
 * @param {string} politicalOutlook.formData - 编辑政治面貌 群众党员团员
 * @param {date} birthday.formData - 编辑生日
 * @param {string} phone.formData.required - 编辑电话
 * @param {string} nativePlace.formData.required - 编辑籍贯
 * @param {string} school.formData.required - 编辑学校
 * @param {string} major.formData.required - 编辑专业
 * @param {string} eduLevel.formData.required - 编辑学历
 * @param {string} currentAddress.formData.required - 编辑现居住地
 * @param {date} employmentDate.formData.required - 编辑入职时间
 * @param {date} turnDate.formData - 编辑转正时间
 * @param {date} leaveDate.formData - 编辑离职时间
 * @param {int} groupId.formData.required - 编辑所属小组id
 * @param {date} createTime.formData - 创建时间
 * @param {date} updateTime.formData - 更新时间
 * @returns {object} 200 - 返回结果
 * @returns {Error}  400 - Unexpected error
 */
router.post("/add", function (req, res, next) {
    addEditor(req, res)
})

router.delete("/delete", function (req, res, next) {
    deleteEditor(req, res)
})
router.delete("/deleteAll", function (req, res, next) {
    deleteAllEditor(req, res)
})

router.put("/update", function (req, res, next) {
    updateEditor(req, res)
})

router.get("/getAll", function (req, res, next) {
    getEditors(req, res)
})


router.get("/getByName", function (req, res, next) {
    getEditorByName(req, res)
})

router.get("/getByWorkNumber", function (req, res, next) {
    getEditorByWorkNumber(req, res)
})
router.get("/getByGroupId", function (req, res, next) {
    getEditorByGroupId(req, res)
})

module.exports = router;