import { injectable } from "tsyringe";
import { ICreateEventoSetorDTO } from "../../dtos/ICreateEventoSetorDTO";
import { EventosSetor } from "../../infra/typeorm/entities/EventosSetor";
import { EventosSetorRepositories } from "../../infra/typeorm/repositories/EventosSetorRepositories";

@injectable()
export class CreateEventoSetorUseCase {
  constructor() { }

  async execute(data: ICreateEventoSetorDTO): Promise<EventosSetor> {
    const repositories = new EventosSetorRepositories();

    const item = await repositories.create(data);

    return item;
  }
}