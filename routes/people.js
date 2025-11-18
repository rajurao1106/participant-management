import express from "express";
import Person from "../models/Person.js";

const router = express.Router();

// GET all people
router.get("/", async (req, res) => {
  try {
    const people = await Person.find().sort({ createdAt: -1 });
    res.json(people);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create new person
router.post("/", async (req, res) => {
  try {
    const person = new Person(req.body);
    const saved = await person.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update status
router.put("/:id", async (req, res) => {
  try {
    const updated = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Person not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
