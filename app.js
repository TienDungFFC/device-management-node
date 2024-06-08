const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { connectDB } = require("./config/db");
const userController = require("./controllers/userController");
const userRoutes = require("./routes/userRoutes");
const deviceRoutes = require("./routes/deviceRoutes");
// Middleware
app.use(express.json());

// Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/devices", deviceRoutes);
app.post("/api/register", userController.register);
app.post("/api/login", userController.login);

connectDB();

module.exports = app;
