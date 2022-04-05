import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreateEventosVendasDTO } from "../../../dtos/ICreateEventosVendasDTO";
import { IListEventoVendasDTO } from "../../../dtos/IListEventoVendasDTO";
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

  async findByEvento(id: string): Promise<IListEventoVendasDTO> {

    const [result, total] = await this.repository.findAndCount({
      where: { id_evento: id },
      order: { created_at: "ASC" },
      relations: [
        "cliente",
        "lote"
      ]
    });

    return {
      result,
      total
    }
  }

  async countVendasLote(id: string): Promise<number> {
    const count = await this.repository.count({
      where: { id_evento_setor_lote: id },
      order: { created_at: "ASC" }
    });

    return count;
  }

  async deleteEventoVenda(id: string): Promise<void> {
    await this.repository.delete(id);
  }

}