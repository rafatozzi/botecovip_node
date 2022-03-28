import { injectable } from "tsyringe";
import { EventosSetorLote } from "../../infra/typeorm/entities/EventosSetorLote";
import { EventosSetorLoteRepositories } from "../../infra/typeorm/repositories/EventosSetorLoteRepositories";

@injectable()
export class FindLoteBySetorUseCase {
  constructor() { }

  async execute(id: string): Promise<EventosSetorLote[]> {
    const repositories = new EventosSetorLoteRepositories();

    const result = await repositories.finBySetor(id);

    return result;
  }
}