import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateCidade } from "../../dtos/ICreateCidade";
import { CreateCidadeUseCase } from "./CreateCidadeUseCase";

export class CreateCidadeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateCidade;

    const useCase = container.resolve(CreateCidadeUseCase);

    const result = await useCase.execute(data);

    return response.status(200).json(result);
  }
}