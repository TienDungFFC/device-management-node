const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Timeline = sequelize.define("Timeline", {
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

  Timeline.belongsTo(User, { foreignKey: "user_id" });

  return Timeline;
};
