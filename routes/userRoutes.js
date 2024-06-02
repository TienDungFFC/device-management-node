// src/routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const deviceController = require("../controllers/deviceController");

router.get("/:userId/devices", deviceController.getDevicesByUser);

module.exports = router;
