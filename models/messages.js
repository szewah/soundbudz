/*Messages belonging to the User*/
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    message: DataTypes.TEXT
  }, {});
  Messages.associate = function(models) {
    // associations can be defined here
    Messages.belongsTo(models.User, {
      foreignKey: 'userID'
    })
  };
  return Messages;
};