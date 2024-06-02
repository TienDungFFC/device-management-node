// src/app.js

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const deviceRoutes = require("./routes/deviceRoutes");
const { connectDB } = require("./config/db");

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/devices", deviceRoutes);

// Kết nối cơ sở dữ liệu
connectDB();

module.exports = app;
