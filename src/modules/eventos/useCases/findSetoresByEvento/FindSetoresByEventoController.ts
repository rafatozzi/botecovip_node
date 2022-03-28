import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindSetoresByEventoUseCase } from "./FindSetoresByEventoUseCase";

export class FindSetoresByEventoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const useCase = container.resolve(FindSetoresByEventoUseCase);

    const item = await useCase.execute(id);

    return response.status(200).json(item);
  }
}