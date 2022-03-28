import { ICreateEventoSetorDTO } from "../dtos/ICreateEventoSetorDTO";
import { EventosSetor } from "../infra/typeorm/entities/EventosSetor";

export interface IEventosSetorRepositories {
  create(data: ICreateEventoSetorDTO): Promise<EventosSetor>;
  findById(id: string): Promise<EventosSetor>;
  findByEvento(id: string): Promise<EventosSetor[]>;
  deleteEventoSetor(id: string): Promise<void>;
}