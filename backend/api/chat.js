const express = require("express");
const router = express.Router();
const { generateResponse } = require("../models/chatModel");

router.post("/chat", async (req, res) => {
  const { message } = req.body;
  const reply = await generateResponse(message);
  res.json({ reply });
});

module.exports = router;