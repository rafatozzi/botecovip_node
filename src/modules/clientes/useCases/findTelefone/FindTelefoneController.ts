import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindTelefoneUseCase } from "./FindTelefoneUseCase";


export class FindTelefoneController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { telefone } = request.params;

    const useCase = container.resolve(FindTelefoneUseCase);

    const result = await useCase.execute(parseInt(telefone));

    return response.status(200).json(result);
  }
}