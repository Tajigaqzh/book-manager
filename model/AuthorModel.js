const {DataTypes, Model} = require('sequelize');

const sequelize = require('../config/sequelize')

/**
 * 作者信息表
 */
class AuthorModel extends Model {
}

AuthorModel.init({
        /**
         * 作者id
         */
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: '作者id',
        },
        /**
         * 作者姓名
         */
        authorName: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 6,

            comment: '作者姓名',

        },
        /**
         * 职称
         */
        academicTitle: {
            type: DataTypes.STRING(2),
            length: 10,

            allowNull: false,
            defaultValue: '讲师',
            comment: '职称'
        },
        /**
         * 联系电话
         */
        phone: {
            type: DataTypes.STRING(11),
            length: 11,
            allowNull: false,
            validate: {
                is: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,

            },
            comment: '联系电话'
        },
        /**
         * 邮箱
         */
        email: {
            type: DataTypes.STRING,
            length: 20,
            allowNull: true,
            validate: {
                isEmail: true,

            },
            comment: '邮箱'
        },
        /**
         * 学校
         */
        school: {
            type: DataTypes.STRING(20),
            length: 20,

            allowNull: false,
            comment: '学校'
        },
        /**
         * 省份
         */
        province: {
            type: DataTypes.STRING(10),
            length: 10,

            allowNull: false,
            comment: '省份'
        },
        /**
         * 新书订阅数量
         */
        bookNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,

            comment: '新书订阅数量'
        },
        /**
         * 是否可添加主编
         */
        couldAdd: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            comment: '是否可添加主编'
        },
        /**
         * 作者介绍
         */
        authorIntroduction: {
            type: DataTypes.TEXT,
            allowNull: true,
            length: 300,

            comment: '作者介绍'
        },
        /**
         * 已出版图书
         */
        publishedBook: {
            type: DataTypes.STRING(100),
            allowNull: true,
            length: 100,

            comment: '已出版图书'
        },
        /**
         * 作者论文专著发明专利情况获奖情况
         */
        authorPaper: {
            type: DataTypes.TEXT,
            allowNull: true,
            length: 300,

            comment: '作者论文专著发明专利情况获奖情况'
        },
        /**
         * 业务员id
         */
        salesmanId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: '业务员id',
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
    },
    {
        sequelize,
        modelName: 'author',
        timestamps: false,
        tableName: 'author',
        comment:"作者信息表",
        indexes: [
            {
                name: 'authorId',
                fields: ['authorId']
            }
        ]
    }
)

/**
 * test
 */



async function test() {

    await sequelize.sync({force: true}).then(() => {
        AuthorModel.create({
            authorId: 100000,
            authorName: 'test',
            academicTitle: '教授',
            phone: '15139632176',
            email: '287384799@163.com',
            school: '华南理工大学',
            province: '广东省',
            bookNumber: 0,
            couldAdd: true,
            authorIntroduction: '阿斯顿回复我都会到我家吃饭是单位丶',
            publishedBook: '《扽会危害》《分为呵呵》《发动机二胡》《的核对》',
            authorPaper: '《分为呵呵——————》《发动机二胡————放到》《的核对》',
            salesmanId: 1001,
            createTime: new Date(),
            updateTime: null

        }).then(res => {
            console.log(res)
        })
        console.log('author表模型同步成功')
    })
}
test()

module.exports = AuthorModel