import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCidadeUseCase } from "./DeleteCidadeUseCase";

export class DeleteCidadeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const useCase = container.resolve(DeleteCidadeUseCase);

    await useCase.execute(id);

    return response.status(200).send();
  }
}