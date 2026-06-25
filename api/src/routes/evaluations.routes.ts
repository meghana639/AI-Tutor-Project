import express from "express";
import { getAllEvaluations } from "../controllers/evaluations.controller";

const router = express.Router();

router.get("/", getAllEvaluations);

export default router;
