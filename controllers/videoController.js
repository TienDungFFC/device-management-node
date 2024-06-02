const db = require("../models");

const deviceController = {
  getDevicesByUser: (req, res) => {
    const userId = req.params.userId;
    const stmt = db.prepare(`
    SELECT *
    FROM Devices
    WHERE Devices.user_id = ?
  `);
    const devices = stmt.all(userId);
    res.json(devices);
  },
};

module.exports = deviceController;
