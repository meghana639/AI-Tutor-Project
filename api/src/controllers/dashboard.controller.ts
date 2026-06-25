import { Request, Response } from "express";
import { getDashboardData } from "../services/dashboard/dashboard.service";

export const getDashboard = (
  req: Request,
  res: Response
) => {
  res.json(getDashboardData());
};