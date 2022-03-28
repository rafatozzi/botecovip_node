import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEventoUseCase } from "./DeleteEventoUseCase";

export class DeleteEventoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const useCase = container.resolve(DeleteEventoUseCase);

    await useCase.execute(id);

    return response.status(200).send();
  }
}