import { Request, Response } from "express";
import { getDashboardData } from "../services/dashboard/dashboard.service";

export const getDashboard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const dashboard = await getDashboardData(
      req.params.tutorId as string
    );

    if (!dashboard) {
      res.status(404).json({
        message: "Tutor not found"
      });
      return;
    }

    res.status(200).json(dashboard);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to load dashboard"
    });
  }
};