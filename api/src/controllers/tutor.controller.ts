import { Request, Response } from "express";
import * as tutorService from "../services/tutor/tutor.service";

export const getTutors = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tutors = await tutorService.getAllTutors();
    res.status(200).json(tutors);
  } catch (error) {
  console.error("FULL ERROR:", error);

  res.status(500).json({
    message: "Failed to fetch tutors",
    error: error instanceof Error ? error.message : String(error),
  });
}
};

export const getTutor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    const tutor = await tutorService.getTutorById(id);

    if (!tutor) {
      res.status(404).json({
        message: "Tutor not found",
      });
      return;
    }

    res.status(200).json(tutor);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch tutor",
    });
  }
};