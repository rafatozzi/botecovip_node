import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindVendasByEventoUseCase } from "./FindVendasByEventoUseCase";

export class FindVendasByEventoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const useCase = container.resolve(FindVendasByEventoUseCase);

    const result = await useCase.execute(id);

    return response.status(200).json(result);
  }
}