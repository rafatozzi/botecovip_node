import { injectable } from "tsyringe";
import { IFilterEventosDTO } from "../../dtos/IFilterEventosDTO";
import { IListEventosDTO } from "../../dtos/IListEventosDTO";
import { EventosRepositories } from "../../infra/typeorm/repositories/EventosRepositories";

@injectable()
export class FindAllEventosUseCase {
  constructor() { }

  async execute(pesquisa?: IFilterEventosDTO, limit?: number, cursor?: number, orderType?: "DESC" | "ASC"): Promise<IListEventosDTO> {
    const repositories = new EventosRepositories();

    const result = await repositories.findAllEventos(pesquisa, limit, cursor, orderType);

    return result;
  }
}