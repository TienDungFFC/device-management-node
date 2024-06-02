const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Video = sequelize.define("Video", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.TEXT,
    },
  });

  Video.belongsTo(User, { foreignKey: "user_id" });

  return Video;
};
