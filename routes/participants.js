import express from "express";
import Participant from "../models/Participant.js";

const router = express.Router();

// GET all participants
router.get("/", async (req, res) => {
  try {
    const participants = await Participant.find().sort({ createdAt: -1 });
    res.json(participants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create participant
router.post("/", async (req, res) => {
  try {
    const participant = new Participant(req.body);
    const saved = await participant.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
