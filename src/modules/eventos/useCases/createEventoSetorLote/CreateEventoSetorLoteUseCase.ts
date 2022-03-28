import { injectable } from "tsyringe";
import { ICreateEventoSetorLoteDTO } from "../../dtos/ICreateEventoSetorLoteDTO";
import { EventosSetorLote } from "../../infra/typeorm/entities/EventosSetorLote";
import { EventosSetorLoteRepositories } from "../../infra/typeorm/repositories/EventosSetorLoteRepositories";

@injectable()
export class CreateEventoSetorLoteUseCase {
  constructor() { }

  async execute(data: ICreateEventoSetorLoteDTO): Promise<EventosSetorLote> {
    const repositories = new EventosSetorLoteRepositories();

    const item = await repositories.create(data);

    return item;
  }
}