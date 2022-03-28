import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateEventoSetorLoteDTO } from "../../dtos/ICreateEventoSetorLoteDTO";
import { CreateEventoSetorLoteUseCase } from "./CreateEventoSetorLoteUseCase";

export class CreateEventoSetorLoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateEventoSetorLoteDTO;

    const useCase = container.resolve(CreateEventoSetorLoteUseCase);

    const item = await useCase.execute(data);

    return response.status(200).json(item);
  }
}