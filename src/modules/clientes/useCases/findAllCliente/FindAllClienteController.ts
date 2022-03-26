import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllClienteUseCase } from "./FindAllClienteUseCase";


export class FindAllClienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { pesquisa, limit, cursor } = request.body;

    const useCase = container.resolve(FindAllClienteUseCase);

    const result = await useCase.execute(pesquisa, limit, cursor);

    return response.status(200).json(result);
  }
}