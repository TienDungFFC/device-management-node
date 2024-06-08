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
};

module.exports = timelineController;
