const express = require("express");
const router = express.Router();
const deviceController = require("../controllers/deviceController");

router.post("/register", deviceController.registerDevice);
router.delete("/:deviceId", deviceController.deleteDevice);

module.exports = router;
