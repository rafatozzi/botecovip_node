import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindVendaByIdUseCase } from "./FindVendaByIdUseCase";

export class FindVendaByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const useCase = container.resolve(FindVendaByIdUseCase);

    const item = await useCase.execute(id);

    return response.status(200).json(item);
  }
}