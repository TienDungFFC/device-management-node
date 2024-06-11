// src/models/index.js

// const { sequelize } = require("../config/db");
// const User = require("./user")(sequelize);
// const Device = require("./device")(sequelize);

// User.hasMany(Device, { foreignKey: "user_id" });
// Device.belongsTo(User, { foreignKey: "user_id" });

// // Sync all models with the database
// sequelize.sync({ force: false }).then(() => {
//   console.log("Database & tables created!");
// });

console.log("process db ", process.env.SQLITE_PATH)
const db = require("better-sqlite3")(process.env.SQLITE_PATH || "/device-management.db");
db.pragma("journal_mode = WAL");
const row = db.prepare("SELECT * FROM Devices WHERE id = 1");
console.log(row.id);
module.exports = db;
