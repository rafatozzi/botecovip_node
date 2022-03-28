import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateEventosVendasDTO } from "../../dtos/ICreateEventosVendasDTO";
import { CreateEventoVendaUseCase } from "./CreateEventoVendaUseCase";

export class CreateEventoVendaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateEventosVendasDTO;

    const useCase = container.resolve(CreateEventoVendaUseCase);

    const item = await useCase.execute(data);

    return response.status(200).json(item);
  }
}