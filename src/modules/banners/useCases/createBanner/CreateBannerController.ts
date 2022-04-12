import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBannerUseCase } from "./CreateBannerUseCase";

export class CreateBannerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const file = request.file.filename;

    const useCase = container.resolve(CreateBannerUseCase);

    const item = await useCase.execute(data, file);

    return response.status(200).json(item);
  }
}