import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreateEventoSetorLoteDTO } from "../../../dtos/ICreateEventoSetorLoteDTO";
import { IEventosSetorLoteRepositories } from "../../../repositories/IEventosSetorLoteRepositories";
import { EventosSetorLote } from "../entities/EventosSetorLote";

export class EventosSetorLoteRepositories implements IEventosSetorLoteRepositories {
  private repository: Repository<EventosSetorLote>;

  constructor() {
    this.repository = AppDataSource.getRepository(EventosSetorLote);
  }

  async create(data: ICreateEventoSetorLoteDTO): Promise<EventosSetorLote> {
    const item = this.repository.create(data);
    await this.repository.save(item);

    return item;
  }

  async findById(id: string): Promise<EventosSetorLote> {
    return await this.repository.findOne({
      where: { id }
    })
  }

  async finBySetor(id: string): Promise<EventosSetorLote[]> {
    return await this.repository.find({
      where: {
        excluir: false,
        id_evento_setor: id
      },
      order: { data: "ASC" }
    })
  }

  async deleteEventoSetorLote(id: string): Promise<void> {
    const item = await this.repository.findOne({ where: { id } });

    item.excluir = true;

    await this.repository.save(item);
  }

}