import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserCidadeUseCase } from "./DeleteUserCidadeUseCase";

export class DeleteUserCidadeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const useCase = container.resolve(DeleteUserCidadeUseCase);

    await useCase.execute(id);

    return response.status(200).send();
  }
}