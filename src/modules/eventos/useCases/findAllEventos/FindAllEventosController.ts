import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllEventosUseCase } from "./FindAllEventosUseCase";

export class FindAllEventosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { pesquisa, cursor, limit } = request.body;

    const useCase = container.resolve(FindAllEventosUseCase);

    const result = await useCase.execute(pesquisa, limit, cursor);

    return response.status(200).json(result);
  }
}