import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreateEventosVendasDTO } from "../../../dtos/ICreateEventosVendasDTO";
import { IEventosVendasRepositories } from "../../../repositories/IEventosVendasRepositories";
import { EventosVendas } from "../entities/EventosVendas";

export class EventosVendasRepositories implements IEventosVendasRepositories {
  private repository: Repository<EventosVendas>;

  constructor() {
    this.repository = AppDataSource.getRepository(EventosVendas);
  }

  async create(data: ICreateEventosVendasDTO): Promise<EventosVendas> {
    const item = this.repository.create(data);

    await this.repository.save(item);

    return item;
  }

  async findById(id: string): Promise<EventosVendas> {
    return await this.repository.findOne({
      where: { id },
      relations: [
        "cliente",
        "evento",
        "lote"
      ]
    });
  }

  async findByEvento(id: string): Promise<EventosVendas[]> {
    return await this.repository.find({
      where: { id_evento: id },
      order: { created_at: "ASC" },
      relations: [
        "cliente",
        "lote"
      ]
    })
  }

  async deleteEventoVenda(id: string): Promise<void> {
    await this.repository.delete(id);
  }

}