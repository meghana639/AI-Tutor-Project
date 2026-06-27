import express from "express";
import { getDashboard } from "../controllers/dashboard.controller";

const router = express.Router();

router.get("/:tutorId", getDashboard);

export default router;