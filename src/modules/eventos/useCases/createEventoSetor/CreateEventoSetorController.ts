import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateEventoSetorDTO } from "../../dtos/ICreateEventoSetorDTO";
import { CreateEventoSetorUseCase } from "./CreateEventoSetorUseCase";

export class CreateEventoSetorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateEventoSetorDTO;

    const useCase = container.resolve(CreateEventoSetorUseCase);

    const item = await useCase.execute(data);

    return response.status(200).json(item);
  }
}