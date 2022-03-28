import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateEventoDTO } from "../../dtos/ICreateEventoDTO";
import { Eventos } from "../../infra/typeorm/entities/Eventos";
import { EventosRepositories } from "../../infra/typeorm/repositories/EventosRepositories";

@injectable()
export class CreateEventoUseCase {
  constructor() { }

  async execute(data: ICreateEventoDTO): Promise<Eventos> {
    const repositories = new EventosRepositories();

    const alreadyExists = await repositories.findAllEventos({ data: data.data, nome: data.nome });

    if (alreadyExists)
      throw new AppError("Evento já cadastrado");

    const item = await repositories.create(data);

    return item;
  }
}