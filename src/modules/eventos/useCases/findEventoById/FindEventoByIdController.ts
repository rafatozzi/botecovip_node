import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindEventoByIdUseCase } from "./FindEventoByIdUseCase";

export class FindEventoByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const useCase = container.resolve(FindEventoByIdUseCase);

    const item = await useCase.execute(id);

    return response.status(200).json(item);
  }
}