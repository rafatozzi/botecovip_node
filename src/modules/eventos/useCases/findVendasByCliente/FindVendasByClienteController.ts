import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindVendasByClienteUseCase } from "./FindVendasByClienteUseCase";

export class FindVendasByClienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { idCliente } = request.body;

    const useCase = container.resolve(FindVendasByClienteUseCase);

    const result = await useCase.execute(idCliente);

    return response.status(200).json(result);
  }
}