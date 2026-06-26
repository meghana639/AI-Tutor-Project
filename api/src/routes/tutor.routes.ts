import { Router } from "express";
import {
  getTutors,
  getTutor,
} from "../controllers/tutor.controller";

const router = Router();

router.get("/", getTutors);

router.get("/:id", getTutor);

export default router;