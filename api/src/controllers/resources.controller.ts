import { Request, Response } from "express";
import { getResources } from "../services/resources/resources.service";

export const getAllResources = (
  req: Request,
  res: Response
) => {
  res.json(getResources());
};