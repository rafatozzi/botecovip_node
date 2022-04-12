import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateBannerUseCase } from "./UpdateBannerUseCase";

export class UpdateBannerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const useCase = container.resolve(UpdateBannerUseCase);

    const item = await useCase.execute(data);

    return response.status(200).json(item);
  }
}