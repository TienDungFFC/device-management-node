const express = require("express");
const router = express.Router();
const deviceController = require("../controllers/deviceController");
const timelineController = require("../controllers/timelineController");
const recordController = require("../controllers/recordController");

router.get("/:userId/devices", deviceController.getDevicesByUser);
router.get("/:userId/timelines", timelineController.getTimelinesByUser);
router.get("/:userId/records", recordController.getRecordsByUser);

module.exports = router;
