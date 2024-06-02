const User = require("../models/user");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
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

module.exports = userController;
