import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { EventosSetorLoteRepositories } from "../../infra/typeorm/repositories/EventosSetorLoteRepositories";

@injectable()
export class DeleteEventoSetorLoteUseCase {
  constructor() { }

  async execute(id: string): Promise<void> {
    const repositories = new EventosSetorLoteRepositories();

    const item = await repositories.findById(id);

    if (!item)
      throw new AppError("Cadastro não encontrado");

    await repositories.deleteEventoSetorLote(id);
  }
}