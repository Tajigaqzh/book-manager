const {DataTypes, Model} = require('sequelize');

const sequelize = require('../config/sequelize')

/**
 * 校次表
 */
class RevisionModel extends Model {

}

RevisionModel.init({
        /**
         * 校次id
         */
        revisionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        /**
         * 校次名称
         */
        revisionName: {
            type: DataTypes.STRING(2),
            allowNull: false,
            length: 2,
            comment: '校次名称',
            defaultValue: '一校',
        },
        /**
         * 图书编号
         */
        bookNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        /**
         * 校次开始时间
         */
        revisionStartTime: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: '校次开始时间',
        },
        /**
         * 校次结束时间
         */
        revisionEndTime: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: '校次结束时间',
        },

        /**
         * 校对状态,是否完成默认false0
         */
        revisionStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        /**
         * 校对描述
         */
        revisionDescription: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: '校次描述',
        },

        /**
         * 创建时间
         */
        createTime: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: "创建时间"
        },
        /**
         * 创建人
         */
        createBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "创建人id"
        },

        executorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "执行人id"
        },
        /**
         * 更新时间
         */
        updateTime: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: "更新时间"
        },
        /**
         * 更新人
         */
        updateBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
            comment: "更新人id"
        },

        /**
         * 工作量
         */
        workLoad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "工作量"
        },

        /**
         * 质量系数
         */
        qualityDegree: {
            type: DataTypes.STRING(3),
            allowNull: true,
            comment: "质量系数"
        },
        difficultyDegree: {
            type: DataTypes.STRING(3),
            allowNull: true,
            comment: "难度系数"
        },
        /**
         * 审核人id
         */
        reviewerId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            comment: "审核人id"
        },

        /**
         * 绩效编号
         */
        performanceNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "绩效编号"
        }
    },
    {
        sequelize,
        modelName: 'revision',
        timestamps: false,
        tableName: 'revision',
        comment: "校次表",
        indexes: [
            {
                name: 'revisionId',
                fields: ['revisionId']
            }
        ]
    }
)


async function test() {
    await sequelize.sync({force: true}).then(() => {
        RevisionModel.create({
            revisionId: 1001,
            revisionName: '一校',
            bookNumber: 100,
            revisionStartTime: '2020-01-01',
            revisionEndTime: '2020-01-15',
            revisionStatus: false,
            revisionDescription: '一校',
            createTime: '2020-01-01',
            createBy: 1,
            executorId: 1,
            workLoad: 200,
            qualityDegree: '1',
            difficultyDegree: '1',
            reviewerId: 2,
            updateTime: '2020-01-03',
            updateBy: 3,
            performanceNumber: 111111,

        }).then(res => {
            console.log(res)
        })
        console.log('校次表模型同步成功')
    })
}

test()

module.exports = RevisionModel