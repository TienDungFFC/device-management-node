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

  registerDevice: async (req, res) => {
    try {
      const { id, name, userId } = req.body;
      const existingDevice = db
        .prepare("SELECT * FROM Devices WHERE id = ?")
        .get(id);
      if (existingDevice) {
        const updateDevice = db.prepare(
          "UPDATE Devices SET name = ?, user_id = ? WHERE id = ?"
        );
        updateDevice.run(name, userId, id);

        res.status(200).json({ message: "Device updated successfully" });
      } else {
        res.status(404).json({ message: "Device not found" });
      }
    } catch (error) {
      console.error("Error registering device:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = deviceController;
