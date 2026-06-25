import express from "express";
import { getAllStudents } from "../controllers/students.controller";

const router = express.Router();

router.get("/", getAllStudents);

export default router;
