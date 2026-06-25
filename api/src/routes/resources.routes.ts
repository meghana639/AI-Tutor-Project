import express from "express";
import { getAllResources } from "../controllers/resources.controller";

const router = express.Router();

router.get("/", getAllResources);

export default router;