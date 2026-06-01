import express from "express";

import {
  markComplete,
  unmarkComplete,
  getToday,
  getRange,
  getHeatmap,
  getHabitStats,
  getAllStats,
} from "../controllers/logController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

// Mark / Unmark Habit
router.post("/", markComplete);
router.delete("/", unmarkComplete);

// Logs
router.get("/today", getToday);
router.get("/range", getRange);

// Analytics
router.get("/heatmap", getHeatmap);
router.get("/stats", getAllStats);
router.get("/stats/:habitId", getHabitStats);

export default router;