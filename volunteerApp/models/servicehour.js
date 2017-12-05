// this is the servicehours table
const bcrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
  const ServiceHour = sequelize.define('ServiceHour', {
    date: { 
      type: DataTypes.DATEONLY,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    numOfHours: { 
      type: DataTypes.INTEGER,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    supervisorName: { 
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    supervisorEmail: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  ServiceHour.associate = (models) => {
    models.ServiceHour.belongsTo(models.User); 
    models.ServiceHour.belongsTo(models.NonProfit); 
  }


  return ServiceHour;
};