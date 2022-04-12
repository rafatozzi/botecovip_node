import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllBannersUseCase } from "./FindAllBannersUseCase";

export class FindAllBannersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { onlyVisibles } = request.body;

    const useCase = container.resolve(FindAllBannersUseCase);

    const banners = await useCase.execute(onlyVisibles);

    return response.status(200).json(banners);
  }
}