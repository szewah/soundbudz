'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
    GroupChat.belongsToMany(models.User, {
      through: "UserGroup",
      foreignKey: "groupId"
    });
  };
  return Group;
};