import { Request, Response } from "express";
import { getEvaluations } from "../services/evaluations/evaluations.service";

export const getAllEvaluations = (
req: Request,
res: Response
) => {
res.json(getEvaluations());
};
