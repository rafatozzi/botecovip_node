import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { EventosVendas } from "../../infra/typeorm/entities/EventosVendas";
import { EventosVendasRepositories } from "../../infra/typeorm/repositories/EventosVendasRepositories";

@injectable()
export class FindVendaByIdUseCase {
  constructor() { }

  async execute(id: string): Promise<EventosVendas> {
    const repository = new EventosVendasRepositories();

    const item = await repository.findById(id);

    if (!item)
      throw new AppError("Ingresso não encontrado");

    return item;
  }
}