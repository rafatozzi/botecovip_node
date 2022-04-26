import { ICreateEventosVendasDTO } from "../dtos/ICreateEventosVendasDTO";
import { IFiltersVendasClientes } from "../dtos/IFiltersVendasClientes";
import { IListEventoVendasDTO } from "../dtos/IListEventoVendasDTO";
import { EventosVendas } from "../infra/typeorm/entities/EventosVendas";

export interface IEventosVendasRepositories {
  create(data: ICreateEventosVendasDTO): Promise<EventosVendas>;
  findById(id: string): Promise<EventosVendas>;
  findByEvento(id: string, lote?: string, setor?: string): Promise<IListEventoVendasDTO>;
  findByCliente(data: IFiltersVendasClientes): Promise<IListEventoVendasDTO>;
  findByOrderId(id: string): Promise<EventosVendas[]>;
  updateStatusByOrderId(orderId: string, newStatus: string): Promise<void>;
  countVendasLote(id: string): Promise<number>;
  deleteEventoVenda(id: string): Promise<void>;
  totalVendas(idEvento: string, idLote?: string): Promise<number>;
}