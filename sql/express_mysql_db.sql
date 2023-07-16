/*
 Navicat Premium Data Transfer

 Source Server         : lcoal
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : express_mysql_db

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 17/07/2023 05:55:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for author
-- ----------------------------
DROP TABLE IF EXISTS `author`;
CREATE TABLE `author`  (
  `authorId` int(11) NOT NULL AUTO_INCREMENT COMMENT '作者id',
  `authorName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '作者姓名',
  `academicTitle` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '讲师' COMMENT '职称',
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '联系电话',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '邮箱',
  `school` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '学校',
  `province` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '省份',
  `bookNumber` int(11) NOT NULL DEFAULT 0 COMMENT '新书订阅数量',
  `couldAdd` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否可添加主编',
  `authorIntroduction` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '作者介绍',
  `publishedBook` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '已出版图书',
  `authorPaper` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '作者论文专著发明专利情况获奖情况',
  `salesmanId` int(11) NOT NULL COMMENT '业务员id',
  `createTime` datetime NOT NULL,
  `updateTime` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`authorId`) USING BTREE,
  INDEX `authorId`(`authorId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 100001 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of author
-- ----------------------------
INSERT INTO `author` VALUES (100000, 'test', '教授', '15139632176', '287384799@163.com', '华南理工大学', '广东省', 0, 1, '阿斯顿回复我都会到我家吃饭是单位丶', '《扽会危害》《分为呵呵》《发动机二胡》《的核对》', '《分为呵呵——————》《发动机二胡————放到》《的核对》', 1001, '2023-07-16 15:14:57', NULL);

-- ----------------------------
-- Table structure for editor
-- ----------------------------
DROP TABLE IF EXISTS `editor`;
CREATE TABLE `editor`  (
  `workNumber` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT '工号',
  `name` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '姓名',
  `gender` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '性别',
  `politicalOutlook` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '政治面貌',
  `birthDay` date NULL DEFAULT NULL COMMENT '出生年月',
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '联系电话',
  `nativePlace` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '籍贯',
  `school` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '毕业院校',
  `major` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '所学专业',
  `eduLevel` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '最高学历',
  `currentAddress` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '现住址',
  `employmentDate` date NOT NULL COMMENT '入职时间',
  `turnDate` date NULL DEFAULT NULL COMMENT '转正时间',
  `leaveDate` date NULL DEFAULT NULL COMMENT '离职时间',
  `groupId` int(10) NOT NULL DEFAULT 1 COMMENT '所属小组id',
  `createTime` datetime NOT NULL,
  `updateTime` datetime NULL DEFAULT NULL,
  `departmentId` int(10) NOT NULL COMMENT '部门id',
  PRIMARY KEY (`workNumber`) USING BTREE,
  INDEX `workNumberIndex`(`workNumber`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1234567891 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of editor
-- ----------------------------
INSERT INTO `editor` VALUES (0001257890, '张三', '男', '群众', '1999-01-01', '15939654984', '北京', '北京大学', '计算机', '本科', '北京', '2020-01-01', '2020-07-01', NULL, 1, '2020-01-01 08:00:00', NULL, 0);
INSERT INTO `editor` VALUES (0012578190, '张三', '男', '群众', '1999-01-01', '15939654984', '北京', '北京大学', '计算机', '本科', '北京', '2020-01-01', '2020-07-01', NULL, 2, '2020-01-01 08:00:00', NULL, 0);
INSERT INTO `editor` VALUES (0123457890, '张三', '男', '群众', '1999-01-01', '15939654984', '北京', '北京大学', '计算机', '本科', '北京', '2020-01-01', '2020-07-01', NULL, 1, '2020-01-01 08:00:00', NULL, 0);
INSERT INTO `editor` VALUES (1234567890, '张三', '男', '群众', '1999-01-01', '15939654984', '北京', '北京大学', '计算机', '本科', '北京', '2020-01-01', '2020-07-01', NULL, 1, '2020-01-01 08:00:00', NULL, 0);

-- ----------------------------
-- Table structure for revision
-- ----------------------------
DROP TABLE IF EXISTS `revision`;
CREATE TABLE `revision`  (
  `revisionId` int(11) NOT NULL AUTO_INCREMENT,
  `revisionName` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '一校' COMMENT '校次名称',
  `bookNumber` int(11) NOT NULL,
  `revisionStartTime` datetime NULL DEFAULT NULL COMMENT '校次开始时间',
  `revisionEndTime` datetime NULL DEFAULT NULL COMMENT '校次结束时间',
  `revisionStatus` tinyint(1) NULL DEFAULT 0,
  `revisionDescription` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '校次描述',
  `createTime` datetime NOT NULL COMMENT '创建时间',
  `createBy` int(11) NOT NULL COMMENT '创建人id',
  `executorId` int(11) NOT NULL COMMENT '执行人id',
  `updateTime` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `updateBy` int(11) NULL DEFAULT NULL COMMENT '更新人id',
  `workLoad` int(11) NOT NULL COMMENT '工作量',
  `qualityDegree` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '质量系数',
  `difficultyDegree` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '难度系数',
  `reviewerId` int(11) NULL DEFAULT NULL COMMENT '审核人id',
  `performanceNumber` int(11) NOT NULL COMMENT '绩效编号',
  PRIMARY KEY (`revisionId`) USING BTREE,
  INDEX `revisionId`(`revisionId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1002 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '校次表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of revision
-- ----------------------------
INSERT INTO `revision` VALUES (1001, '一校', 100, '2020-01-01 08:00:00', '2020-01-15 08:00:00', 0, '一校', '2020-01-01 08:00:00', 1, 1, '2020-01-03 08:00:00', 3, 200, '1', '1', 2, 111111);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`, `username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (12, 'user11', '$2b$10$MNWovZXIbxKGxqCdIEGYKOCiJiku8cIl27wAZHG6qIFlRFYLON9hC');
INSERT INTO `user` VALUES (13, 'haha', '$2b$10$PBKQ7am/ueZxizl/lkBtE.V3ZnUKXfJWTdsOvjtMqeopMWA.ZPyWW');
INSERT INTO `user` VALUES (14, 'ha', '$2b$10$yPbaR0HtfwIW1FGDjeWONuI32C.Z13PwDWU0BV6vAkvOCTJtK0nqe');
INSERT INTO `user` VALUES (15, 'admin', '$2b$10$PsFf1fVm.LqJZGTYokH1JuifO9oJrq.NOyVW0X8Kr1.Ciz3vqK4FO');

SET FOREIGN_KEY_CHECKS = 1;
