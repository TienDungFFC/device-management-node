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
  deleteVideoById: async (req, res) => {
    try {
      const videoId = req.params.videoId;
      
      const result = db.prepare("DELETE FROM Videos WHERE id = ?").run(videoId);
      
      if (result.changes > 0) {
        res.status(200).end();
      } else {
        res.status(404).json({ message: "Video not found" });
      }
    } catch (error) {
      console.error("Error deleting video:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

};

module.exports = deviceController;
