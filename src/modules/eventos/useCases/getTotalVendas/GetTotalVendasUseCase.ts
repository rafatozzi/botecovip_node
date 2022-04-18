import { injectable } from "tsyringe";
import { EventosVendasRepositories } from "../../infra/typeorm/repositories/EventosVendasRepositories";

@injectable()
export class GetTotalVendasUseCase {
  constructor() { }

  async execute(idEvento: string, idLote?: string): Promise<number> {
    const repository = new EventosVendasRepositories();

    return await repository.totalVendas(idEvento, idLote);
  }
}