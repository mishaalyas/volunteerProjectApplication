module.exports = (sequelize, DataTypes) => {
  const College = sequelize.define('college', {
    collegeName: {
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    collegeCity: {
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    communityServiceOfficeContactPerson: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    communityServiceOfficeContactNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    communityServiceOfficeContactEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
/*
  College.associate = (models) => {
    models.College.belongsTo(models.User);
  }
*/
  return College;
};