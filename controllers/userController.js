const db = require("../models");
const bcrypt = require("bcrypt");

const userController = {
  login: async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    try {
      const user = db
        .prepare("SELECT id, password FROM users WHERE username = ?")
        .get(username);

      if (!user) {
        return res.status(400).json({ error: "Invalid username or password" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(400).json({ error: "Invalid username or password" });
      }

      res.status(200).json({ message: "Login successful", userId: user.id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  register: async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const userExists =
        db
          .prepare("SELECT COUNT(*) as count FROM users WHERE username = ?")
          .get(username).count > 0;

      if (userExists) {
        return res.status(400).json({ error: "Username already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const stmt = db.prepare(
        "INSERT INTO users (username, password) VALUES (?, ?)"
      );
      const result = stmt.run(username, hashedPassword);
      res.status(201).json({
        message: "User registered successfully",
        userId: result.lastInsertRowid,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = userController;
