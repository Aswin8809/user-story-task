const express = require("express");
const router = express.Router();

// fake DB connection function
const connectToDatabase = () => {
  console.log("DB connected");
};

connectToDatabase();

// route 1
router.get("/api/gifts", (req, res) => {
  res.json(["Gift1", "Gift2"]);
});

// route 2
router.get("/api/gifts/:id", (req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;
