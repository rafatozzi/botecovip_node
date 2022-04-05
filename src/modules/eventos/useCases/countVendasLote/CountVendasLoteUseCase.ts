import { injectable } from "tsyringe";
import { EventosVendasRepositories } from "../../infra/typeorm/repositories/EventosVendasRepositories";

@injectable()
export class CountVendasLoteUseCase {
  constructor() { }

  async execute(id: string): Promise<number> {
    const repository = new EventosVendasRepositories();

    const count = await repository.countVendasLote(id);

    return count;
  }
}