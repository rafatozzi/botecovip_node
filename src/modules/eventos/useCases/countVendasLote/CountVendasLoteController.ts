import { Request, Response } from "express";
import { container } from "tsyringe";
import { CountVendasLoteUseCase } from "./CountVendasLoteUseCase";

export class CountVendasLoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const useCase = container.resolve(CountVendasLoteUseCase);

    const result = await useCase.execute(id);

    return response.status(200).json(result);
  }
}