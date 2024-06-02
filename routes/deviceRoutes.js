// src/routes/userRoutes.js

const express = require("express");
const router = express.Router();
const deviceController = require("../controllers/userController");

router.get("/user/", deviceController.getAllUsers);

module.exports = router;
