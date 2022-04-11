import { Request, Response } from "express";
import { container } from "tsyringe";
import { EventoPaySuccessUseCase } from "./EventoPaySuccessUseCase";

export class EventoPaySuccessController {
  async handle(request: Request, response: Response): Promise<Response> {
    const resData = request.body;

    const useCase = container.resolve(EventoPaySuccessUseCase);

    await useCase.execute(resData.data.id, resData.type, request.io);

    return response.status(200).send();
  }
}