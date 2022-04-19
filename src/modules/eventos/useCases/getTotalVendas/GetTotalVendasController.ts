import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetTotalVendasUseCase } from "./GetTotalVendasUseCase";

export class GetTotalVendasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { idEvento, idLote } = request.body;

    const useCase = container.resolve(GetTotalVendasUseCase);

    const result = await useCase.execute(idEvento, idLote);

    return response.status(200).json(result);
  }
}