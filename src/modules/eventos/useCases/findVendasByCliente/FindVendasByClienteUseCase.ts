import { injectable } from "tsyringe";
import { IFiltersVendasClientes } from "../../dtos/IFiltersVendasClientes";
import { IListEventoVendasDTO } from "../../dtos/IListEventoVendasDTO";
import { EventosVendasRepositories } from "../../infra/typeorm/repositories/EventosVendasRepositories";

@injectable()
export class FindVendasByClienteUseCase {
  constructor() { }

  async execute(data: IFiltersVendasClientes): Promise<IListEventoVendasDTO> {
    const repository = new EventosVendasRepositories();

    const list = await repository.findByCliente(data);

    return list;
  }
}