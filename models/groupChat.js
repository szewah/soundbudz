/*Group created from event*/
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('GroupChat', {
    name: DataTypes.STRING
  }, {});
  GroupChat.associate = function(models) {
    // associations can be defined here
    GroupChat.belongsToMany(models.User, {
      through: "UserGroup",
      foreignKey: "groupchatId"
    });
  };
  return GroupChat;
};