import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteEventoSetorLoteUseCase } from "./DeleteEventoSetorLoteUseCase";

export class DeleteEventoSetorLoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const useCase = container.resolve(DeleteEventoSetorLoteUseCase);

    await useCase.execute(id);

    return response.status(200).send();
  }
}