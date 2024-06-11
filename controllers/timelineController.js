const db = require("../models");

const timelineController = {
  getTimelinesByUser: (req, res) => {
    const userId = req.params.userId;
    const stmt = db.prepare(`
    SELECT *
    FROM Timelines
    WHERE Timelines.user_id = ?
  `);
    const timelines = stmt.all(userId);
    res.json(timelines);
  },

  deleteTimelineById: async (req, res) => {
    try {
      const timelineId = req.params.timelineId;
      
      const result = db.prepare("DELETE FROM Timelines WHERE id = ?").run(timelineId);
      
      if (result.changes > 0) {
        res.status(200).end();
      } else {
        res.status(404).json({ message: "Timeline not found" });
      }
    } catch (error) {
      console.error("Error deleting timeline:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

module.exports = timelineController;
