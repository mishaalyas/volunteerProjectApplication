// this is the nonprofit table

module.exports = (sequelize, DataTypes) => {
  const NonProfit = sequelize.define('nonprofit', {
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
/* this is not needed because this is storing general information about the nonprofit
  NonProfit.associate = (models) => {
    models.NonProfit.hasMany(models.User); // one nonprofit can have many users
  }
*/
  return NonProfit;
};