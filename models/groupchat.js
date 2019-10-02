'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupChat = sequelize.define('GroupChat', {
    name: DataTypes.STRING
  }, {});
  GroupChat.associate = function(models) {
    // associations can be defined here
  };
  return GroupChat;
};