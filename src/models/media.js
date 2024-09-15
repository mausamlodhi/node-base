module.exports = (sequelize, DataTypes) => {
  const media = sequelize.define(
    "media",
    {
      name: {
        type: DataTypes.STRING(255),
      },
      basePath: {
        type: DataTypes.STRING(255),
      },
      mediaType: {
        type: DataTypes.STRING(200),
      },
      mediaFor: {
        type: DataTypes.STRING(100),
      },
    },
    {
      underscored: true,
    }
  );
  return media;
};
