import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindClienteByIdUseCase } from "./FindClienteByIdUseCase";


export class FindClienteByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const useCase = container.resolve(FindClienteByIdUseCase);

    const result = await useCase.execute(id);

    return response.status(200).json(result);
  }
}