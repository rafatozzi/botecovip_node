import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindLoteBySetorUseCase } from "./FindLoteBySetorUseCase";

export class FindLoteBySetorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const useCase = container.resolve(FindLoteBySetorUseCase);

    const result = await useCase.execute(id);

    return response.status(200).json(result);
  }
}