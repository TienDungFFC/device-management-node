const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

router.delete("/:videoId", videoController.deleteVideoById);

module.exports = router;
