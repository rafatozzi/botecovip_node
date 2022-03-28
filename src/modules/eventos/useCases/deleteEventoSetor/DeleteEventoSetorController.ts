import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEventoSetorUseCase } from "./DeleteEventoSetorUseCase";

export class DeleteEventoSetorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const useCase = container.resolve(DeleteEventoSetorUseCase);

    await useCase.execute(id);

    return response.status(200).send();
  }
}