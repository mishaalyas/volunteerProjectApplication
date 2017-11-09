// this is the nonprofit table

module.exports = (sequelize, DataTypes) => {
  const NonprofitVolunteers = sequelize.define('nonprofitVolunteers', {
    username: { //information about volunteer
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: { //password of the volunteer userName
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    volunteerComments: { //comments about the volunteer's work 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
// this is storing general information about the nonprofit volunteers 
  NonprofitVolunteers.associate = (models) => {
    models.NonprofitVolunteers.hasMany(models.User); // one nonprofit can have many volunteers
  return NonprofitVolunteers;
};