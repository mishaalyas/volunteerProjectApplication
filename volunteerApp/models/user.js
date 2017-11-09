// this is the user's table 
// every user has a user key which is the primary key
const bcrypt = require('bcrypt-nodejs');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstName: { //first name
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: { //last name
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    collegeName: { //college name 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    dateOfBirth: { //date of birth
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    username: { //user name
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      },
    },
    email: { //email 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password_hash: { //password
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        notEmpty: true,
      },
    },
  });

  User.associate = (models) => { //the user table is connected to nonprofit table 
    // a non profit can have many users but One user can be associated with one nonprofit 
    models.User.belongsTo(models.NonprofitVolunteers); //this is one to many relationship
  }

  User.beforeCreate((user) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      user.password_hash = hashedPw;
    })
  );

  return User;
};