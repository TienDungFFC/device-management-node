const express = require("express");
const router = express.Router();
const timelineController = require("../controllers/timelineController");

router.delete("/:timelineId", timelineController.deleteTimelineById);

module.exports = router;
