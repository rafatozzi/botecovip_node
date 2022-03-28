import { Eventos } from "../infra/typeorm/entities/Eventos";

export interface IListEventosDTO {
  total: number;
  result: Eventos[];
}