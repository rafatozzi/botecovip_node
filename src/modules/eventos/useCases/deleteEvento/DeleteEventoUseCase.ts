import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { EventosRepositories } from "../../infra/typeorm/repositories/EventosRepositories";
import { EventosSetorLoteRepositories } from "../../infra/typeorm/repositories/EventosSetorLoteRepositories";
import { EventosSetorRepositories } from "../../infra/typeorm/repositories/EventosSetorRepositories";


@injectable()
export class DeleteEventoUseCase {
  constructor() { }

  async execute(id: string): Promise<void> {
    const repositories = new EventosRepositories();
    const setorRepositoies = new EventosSetorRepositories();
    const loteRepositories = new EventosSetorLoteRepositories();

    const item = await repositories.findById(id);

    if (!item)
      throw new AppError("Evento não encontrado");

    item.setores.map(async (rsSetor) => {
      rsSetor.lotes.map(async (rsLote) => {
        await loteRepositories.deleteEventoSetorLote(rsLote.id);
      });

      await setorRepositoies.deleteEventoSetor(rsSetor.id);
    });

    await repositories.deleteEvento(id);
  }
}