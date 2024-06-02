const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dv_list_ver: {
      type: DataTypes.INTEGER,
    },
    vid_list_ver: {
      type: DataTypes.INTEGER,
    },
    tl_list_ver: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.STRING,
    },
  });

  User.hasMany(Device, { foreignKey: "user_id" });
  User.hasMany(Video, { foreignKey: "user_id" });
  User.hasMany(Timeline, { foreignKey: "user_id" });

  return User;
};
