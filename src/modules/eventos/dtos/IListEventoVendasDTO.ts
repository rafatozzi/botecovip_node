import { EventosVendas } from "../infra/typeorm/entities/EventosVendas";

export interface IListEventoVendasDTO {
  total: number;
  result: EventosVendas[];
}