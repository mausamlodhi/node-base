module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      firstName: {
        type: DataTypes.STRING(250),
        allowNull: false,
        trim: true,
      },
      lastName: {
        type: DataTypes.STRING(250),
        allowNull: false,
        trim: true,
      },
    },
    {
      underscored: true,
    }
  );
  return user;
};
