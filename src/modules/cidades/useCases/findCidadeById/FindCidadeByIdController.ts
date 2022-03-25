import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindCidadeByIdUseCase } from "./FindCidadeByIdUseCase";

export class FindCidadeByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const useCase = container.resolve(FindCidadeByIdUseCase);

    const result = await useCase.execute(id);

    return response.status(200).json(result);
  }
}