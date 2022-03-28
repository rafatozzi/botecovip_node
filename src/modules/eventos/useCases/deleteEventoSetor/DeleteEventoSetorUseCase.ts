import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { EventosSetorRepositories } from "../../infra/typeorm/repositories/EventosSetorRepositories";

@injectable()
export class DeleteEventoSetorUseCase {
  constructor() { }

  async execute(id: string): Promise<void> {
    const repositories = new EventosSetorRepositories();

    const item = await repositories.findById(id);

    if (!item)
      throw new AppError("Cadastro não encontrado");

    await repositories.deleteEventoSetor(id);

  }
}