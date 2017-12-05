// this is the nonprofit table
const bcrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
  const NonProfit = sequelize.define('NonProfit', {
    name: { //nonprofit's name
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: { //address of the nonprofit
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    number: { //phone number
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  NonProfit.associate = (models) => {
    console.log(Object.keys(models))
    models.NonProfit.hasMany(models.ServiceHour);
  }

  return NonProfit;
};