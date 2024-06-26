const express = require("express");
const router = express.Router();
const deviceController = require("../controllers/deviceController");
const timelineController = require("../controllers/timelineController");
const recordController = require("../controllers/recordController");
const userController = require("../controllers/userController");

router.get("/:userId/devices", deviceController.getDevicesByUser);
router.get("/:userId/timelines", timelineController.getTimelinesByUser);
router.get("/:userId/records", recordController.getRecordsByUser);
router.post("/", userController.register);
module.exports = router;
