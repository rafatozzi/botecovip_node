import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadImageUseCase } from "./UploadImageUseCase";

export class UploadImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { eventoId } = request.body;
    const file = request.file.filename;

    const useCase = container.resolve(UploadImageUseCase);

    await useCase.execute(eventoId, file);

    return response.status(200).send();
  }
}