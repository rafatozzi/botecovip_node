import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateClientesDTO } from "../../dtos/ICreateClientesDTO";
import { CreateClienteUseCase } from "./CreateClienteUseCase";

export class CreateClienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateClientesDTO;

    const useCase = container.resolve(CreateClienteUseCase);

    const result = await useCase.execute(data);

    return response.status(200).json(result);
  }
}