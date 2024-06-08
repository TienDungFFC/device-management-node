const db = require("../models");

const recordController = {
  getRecordsByUser: (req, res) => {
    const userId = req.params.userId;
    const stmt = db.prepare(`
    SELECT *
    FROM Videos
    WHERE Videos.user_id = ?
  `);
    const videos = stmt.all(userId);
    res.json(videos);
  },
};

module.exports = recordController;
