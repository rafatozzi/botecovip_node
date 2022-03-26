import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateClienteUseCase } from "./AuthenticateClienteUseCase";

export class AuthenticateClienteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { telefone, senha } = request.body;

    const useCase = container.resolve(AuthenticateClienteUseCase);

    const result = await useCase.execute(telefone, senha);

    return response.status(200).json(result);
  }
}