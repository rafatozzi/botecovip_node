import { request, Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateUserCidadeDTO } from "../../dtos/ICreateUserCidadeDTO";
import { CreateUserCidadeUseCase } from "./CreateUserCidadeUseCase";

export class CreateUserCidadeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateUserCidadeDTO;

    const useCase = container.resolve(CreateUserCidadeUseCase);

    const result = await useCase.execute(data);

    return response.status(200).json(result);
  }
}