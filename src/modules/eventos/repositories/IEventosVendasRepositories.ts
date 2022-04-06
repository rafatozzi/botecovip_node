import { ICreateEventosVendasDTO } from "../dtos/ICreateEventosVendasDTO";
import { IListEventoVendasDTO } from "../dtos/IListEventoVendasDTO";
import { EventosVendas } from "../infra/typeorm/entities/EventosVendas";

export interface IEventosVendasRepositories {
  create(data: ICreateEventosVendasDTO): Promise<EventosVendas>;
  findById(id: string): Promise<EventosVendas>;
  findByEvento(id: string, lote?: string): Promise<IListEventoVendasDTO>;
  countVendasLote(id: string): Promise<number>;
  deleteEventoVenda(id: string): Promise<void>;
}