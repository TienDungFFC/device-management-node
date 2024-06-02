const db = require("../models");

const deviceController = {
  // getDevicesByUser: async (req, res) => {
  //   try {
  //     const userId = req.params.userId;
  //     console.log("device: ", Device);
  //     const devices = await Device.findAll({
  //       where: { user_id: userId },
  //     });

  //     res.json(devices);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // },
  getDevicesByUser: (req, res) => {
    const userId = req.params.userId;
    const stmt = db.prepare(`
    SELECT *
    FROM Devices
    WHERE Devices.user_id = ?
  `);
    const devices = stmt.all(userId);
    res.json(devices);
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createUser: async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
    });

    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = deviceController;
