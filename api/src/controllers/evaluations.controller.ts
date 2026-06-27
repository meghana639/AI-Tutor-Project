import { Request, Response } from "express";
import * as evaluationService from "../services/evaluations/evaluations.service";

export const getEvaluations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const evaluations = await evaluationService.getAllEvaluations();
    res.status(200).json(evaluations);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch evaluations",
    });
  }
};

export const getEvaluation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const evaluation = await evaluationService.getEvaluationById(
      req.params.id as string
    );

    if (!evaluation) {
      res.status(404).json({
        message: "Evaluation not found",
      });
      return;
    }

    res.status(200).json(evaluation);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch evaluation",
    });
  }
};

export const createEvaluation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const evaluation = await evaluationService.createEvaluation(req.body);

    res.status(201).json(evaluation);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create evaluation",
    });
  }
};