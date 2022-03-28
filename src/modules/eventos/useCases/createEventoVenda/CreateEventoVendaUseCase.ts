import { injectable } from "tsyringe";
import { ICreateEventosVendasDTO } from "../../dtos/ICreateEventosVendasDTO";
import { EventosVendas } from "../../infra/typeorm/entities/EventosVendas";
import { EventosVendasRepositories } from "../../infra/typeorm/repositories/EventosVendasRepositories";

@injectable()
export class CreateEventoVendaUseCase {
  constructor() { }

  async execute(data: ICreateEventosVendasDTO): Promise<EventosVendas> {
    const repositories = new EventosVendasRepositories();

    const item = await repositories.create(data);

    return item;
  }
}