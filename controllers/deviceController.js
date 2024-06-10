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
        if (existingDevice.user_id && existingDevice.user_id !== userId) {
          res
            .status(403)
            .json({ message: "Device already registered by another user" });
        } else {
          const updateDevice = db.prepare(
            "UPDATE Devices SET name = ?, user_id = ? WHERE id = ?"
          );
          updateDevice.run(name, userId, id);

          res.status(200).json({ message: "Device updated successfully" });
        }
      } else {
        res.status(404).json({ message: "Device not found" });
      }
    } catch (error) {
      console.error("Error registering device:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteDevice: async (req, res) => {
    try {
      const deviceId = req.params.deviceId;
      const updateDevice = db.prepare(
        "UPDATE Devices SET user_id = NULL WHERE id = ?"
      );
      updateDevice.run(deviceId);
      res.status(200).json({ message: "Device deleted successfully" });
    } catch (error) {
      console.error("Error deleting device:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = deviceController;
