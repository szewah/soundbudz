/*The groups belonging to the User*/ 
'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    userID: {
      type: DataTypes.INTERGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id"
      }
    },
    groupId: {
      type: DataTypes.INTERGER,
      allowNull: false,
      references: {
        model: "GroupChat",
        key: "id"
      }
    }
  });
  return UserGroup;
};