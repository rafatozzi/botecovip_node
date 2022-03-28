import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateEventoDTO } from "../../dtos/ICreateEventoDTO";
import { CreateEventoUseCase } from "./CreateEventoUseCase";

export class CreateEventoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateEventoDTO;

    const useCase = container.resolve(CreateEventoUseCase);

    const item = await useCase.execute(data);

    return response.status(200).json(item);
  }
}