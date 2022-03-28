import { ICreateEventoSetorLoteDTO } from "../dtos/ICreateEventoSetorLoteDTO";
import { EventosSetorLote } from "../infra/typeorm/entities/EventosSetorLote";

export interface IEventosSetorLoteRepositories {
  create(data: ICreateEventoSetorLoteDTO): Promise<EventosSetorLote>;
  findById(id: string): Promise<EventosSetorLote>;
  finBySetor(id: string): Promise<EventosSetorLote[]>;
  deleteEventoSetorLote(id: string): Promise<void>;
}