import { ICreateEventoDTO } from "../dtos/ICreateEventoDTO";
import { IFilterEventosDTO } from "../dtos/IFilterEventosDTO";
import { IListEventosDTO } from "../dtos/IListEventosDTO";
import { Eventos } from "../infra/typeorm/entities/Eventos";

export interface IEventosRepositories {
  create(data: ICreateEventoDTO): Promise<Eventos>;
  findById(id: string): Promise<Eventos>;
  findAllEventos(pesquisa?: IFilterEventosDTO, limit?: number, cursor?: number): Promise<IListEventosDTO>;
  deleteEvento(id: string): Promise<void>;
}