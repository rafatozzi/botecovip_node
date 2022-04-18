import { injectable } from "tsyringe";
import { IListEventoVendasDTO } from "../../dtos/IListEventoVendasDTO";
import { EventosVendasRepositories } from "../../infra/typeorm/repositories/EventosVendasRepositories";

@injectable()
export class FindVendasByClienteUseCase {
  constructor() { }

  async execute(idCliente: string): Promise<IListEventoVendasDTO> {
    const repository = new EventosVendasRepositories();

    const list = await repository.findByCliente(idCliente);

    return list;
  }
}