import { Request, Response } from "express";
import { container } from "tsyringe";
import { IFiltersVendasClientes } from "../../dtos/IFiltersVendasClientes";
import { FindVendasByClienteUseCase } from "./FindVendasByClienteUseCase";

export class FindVendasByClienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as IFiltersVendasClientes;

    const useCase = container.resolve(FindVendasByClienteUseCase);

    const result = await useCase.execute(data);

    return response.status(200).json(result);
  }
}