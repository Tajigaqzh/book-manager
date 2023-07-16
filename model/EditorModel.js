const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/sequelize')

/**
 * 编辑信息表
 */
class Editor extends Model {
}

Editor.init({
    /**
     * 工号
     */
    workNumber: {
        type: DataTypes.INET,
        allowNull: false,
        primaryKey: true,
        length: 10,
        autoIncrement: true,
    },
    /**
     * 姓名
     */
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 6
    },
    /**
     * 性别
     */
    gender: {
        type: DataTypes.STRING,
        length: 1,
        allowNull: false,
        defaultValue: '男',
    },
    /**
     * 政治面貌
     */
    politicalOutlook: {
        type: DataTypes.STRING,
        length: 4,
        allowNull: true,
        defaultValue: '群众',
    },

    /**
     * 出生日期
     */
    birthDay: {
        type: DataTypes.DATE,
        allowNull: true,
        length: 10
    },
    /**
     * 联系电话
     */
    phone: {
        type: DataTypes.STRING,
        length: 11,
        allowNull: false,
    },
    /**
     * 籍贯
     */
    nativePlace: {
        type: DataTypes.STRING,
        length: 20,
        allowNull: false,
    },
    /**
     * 学校
     */
    school: {
        type: DataTypes.STRING,
        length: 20,
        allowNull: false,

    },
    /**
     * 专业
     */
    major: {
        type: DataTypes.STRING,
        length: 10,
        allowNull: false,
    },
    /**
     * 学历
     */
    eduLevel: {
        type: DataTypes.STRING,
        length: 5,
        defaultValue: "本科",
        allowNull: false
    },
    /**
     * 现住址
     */
    currentAddress: {
        type: DataTypes.STRING,
        length: 50,
        allowNull: true,
        defaultValue: "北京"
    },
    /**
     * 入职时间
     */
    employmentDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    /**
     * 转正时间
     */
    turnDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    /**
     * 离职时间
     */
    leaveDate: {
        type: DataTypes.DATE,
        allowNull: true,

    },
    /**
     * 所属小组id
     */
    groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        length: 10
    },
    /**
     * 创建时间
     */
    createTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    /**
     * 更新时间
     */
    updateTime: {
        type: DataTypes.DATE,
        allowNull: true
    },
    /**
     * 部门id
     */
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        length: 10
    }

}, {
    sequelize,
    modelName: 'editor',
    timestamps: false,
    tableName: 'editor',


});

/**test*/

const ed = Editor.build(
    {
        workNumber: '1234567890',
        name: '张三',
        gender: '男',
        politicalOutlook: '群众',
        birthDay: '1999-01-01',
        phone: '15939654984',
        nativePlace: '北京',
        school: '北京大学',
        major: '计算机',
        eduLevel: '本科',
        currentAddress: '北京',
        employmentDate: '2020-01-01',
        turnDate: '2020-07-01',
        leaveDate: null,
        groupId: 1,
        createTime: '2020-01-01',
        updateTime: null,
        departmentId: 1
    });
module.exports = Editor;


