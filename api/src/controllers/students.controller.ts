import { Request, Response } from "express";
import { getStudents } from "../services/students/students.service";

export const getAllStudents = (
req: Request,
res: Response
) => {
res.json(getStudents());
};
