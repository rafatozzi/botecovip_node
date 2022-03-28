import { injectable } from "tsyringe";
import { EventosSetor } from "../../infra/typeorm/entities/EventosSetor";
import { EventosSetorRepositories } from "../../infra/typeorm/repositories/EventosSetorRepositories";

@injectable()
export class FindSetoresByEventoUseCase {
  constructor() { }

  async execute(id: string): Promise<EventosSetor[]> {
    const repositories = new EventosSetorRepositories();

    const result = await repositories.findByEvento(id);

    return result;
  }
}