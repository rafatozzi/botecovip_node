import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { EventosSetorLoteRepositories } from "../../infra/typeorm/repositories/EventosSetorLoteRepositories";
import { EventosSetorRepositories } from "../../infra/typeorm/repositories/EventosSetorRepositories";

@injectable()
export class DeleteEventoSetorUseCase {
  constructor() { }

  async execute(id: string): Promise<void> {
    const repositories = new EventosSetorRepositories();
    const loteRepositories = new EventosSetorLoteRepositories();

    const item = await repositories.findById(id);

    if (!item)
      throw new AppError("Cadastro não encontrado");

    item.lotes.map(async (rsLote) => {
      await loteRepositories.deleteEventoSetorLote(rsLote.id);
    });

    await repositories.deleteEventoSetor(id);

  }
}