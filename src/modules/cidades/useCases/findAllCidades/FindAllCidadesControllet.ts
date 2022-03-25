import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllCidadesUseCase } from "./FindAllCidadesUseCase";


export class FindAllCidadesControllet {
  async handle(request: Request, response: Response): Promise<Response> {
    const { limit, cursor } = request.body;

    const useCase = container.resolve(FindAllCidadesUseCase);

    const result = await useCase.execute(limit, cursor);

    return response.status(200).json(result);
  }
}