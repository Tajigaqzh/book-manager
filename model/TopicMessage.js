const {DataTypes, Model} = require('sequelize');

const sequelize = require('../config/sequelize')

/**
 * 选题信息
 */
class TopicMessageModel extends Model {


}

TopicMessageModel.init({
    /**
     * 选题序号
     */
    topicId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: '选题id',
    },
    /**
     * 选题名称
     */
    topicName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        length: 50,
        comment: '选题名称',
    },

    /**
     * 选题类型
     */
    topicType: {
        type: DataTypes.STRING(50),
        allowNull: false,
        length: 50,
        comment: '选题类型',
    },
    /**
     * 选题状态,默认false0
     */
    topicStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: '选题状态',
        defaultValue: false,
    },
    /**
     * 出版社id
     */
    publisherHouseId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '出版社id',
    },

    /**
     * 责任编辑
     */
    executiveEditor:{
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '责任编辑',
    },
    currentTextEditorId: {
        type:DataTypes.INTEGER,
        allowNull: true,
        comment: '当前文编id',

    },
    currentArtEditorId: {
        type:DataTypes.INTEGER,
        allowNull: true,
        comment: '当前美编id',
    },
    isPutPublishHouse:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        comment: '是否提交出版社',
    },
    publishingHouseProgress:{
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '出版社进度',
    },

}, {
   sequelize,
    modelName: 'TopicMessage',
    tableName: 'topicMessage',

})


async function test() {
    await sequelize.sync({force: true}).then(() => {

        console.log('校次表模型同步成功')
    })
}

test()

module.exports = RevisionModel