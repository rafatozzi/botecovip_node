import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreateEventoSetorDTO } from "../../../dtos/ICreateEventoSetorDTO";
import { IEventosSetorRepositories } from "../../../repositories/IEventosSetorRepositories";
import { EventosSetor } from "../entities/EventosSetor";

export class EventosSetorRepositories implements IEventosSetorRepositories {
  private repository: Repository<EventosSetor>;

  constructor() {
    this.repository = AppDataSource.getRepository(EventosSetor);
  }

  async create(data: ICreateEventoSetorDTO): Promise<EventosSetor> {
    const item = this.repository.create(data);
    await this.repository.save(item);

    return item;
  }

  async findById(id: string): Promise<EventosSetor> {
    return await this.repository.findOne({
      where: { id },
      relations: [
        "lotes"
      ]
    });
  }

  async findByEvento(id: string): Promise<EventosSetor[]> {
    return await this.repository.find({
      where: {
        excluir: false,
        id_evento: id
      },
      order: { nome: "ASC" }
    })
  }

  async deleteEventoSetor(id: string): Promise<void> {
    const item = await this.repository.findOne({ where: { id } });

    item.excluir = true;

    await this.repository.save(item);
  }

}