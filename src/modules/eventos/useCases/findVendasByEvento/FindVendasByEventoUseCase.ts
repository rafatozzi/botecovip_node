import { injectable } from "tsyringe";
import { IListEventoVendasDTO } from "../../dtos/IListEventoVendasDTO";
import { EventosVendasRepositories } from "../../infra/typeorm/repositories/EventosVendasRepositories";

@injectable()
export class FindVendasByEventoUseCase {
  constructor() { }

  async execute(id: string, lote?: string, setor?: string): Promise<IListEventoVendasDTO> {
    const repositories = new EventosVendasRepositories();

    const result = await repositories.findByEvento(id, lote, setor);

    return result;
  }
}