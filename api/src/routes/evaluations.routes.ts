import { Router } from "express";

import {
  getEvaluations,
  getEvaluation,
  createEvaluation,
} from "../controllers/evaluations.controller";

const router = Router();

router.get("/", getEvaluations);

router.get("/:id", getEvaluation);

router.post("/", createEvaluation);

export default router;