import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Eventos } from "../../infra/typeorm/entities/Eventos";
import { EventosRepositories } from "../../infra/typeorm/repositories/EventosRepositories";

@injectable()
export class FindEventoByIdUseCase {
  constructor() { }

  async execute(id: string): Promise<Eventos> {
    const repositories = new EventosRepositories();

    const item = await repositories.findById(id);

    if (!item)
      throw new AppError("Evento não encontrado");

    return item;
  }
}