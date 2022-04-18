import { Repository, Not, Equal } from "typeorm";
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

  async findByEvento(id: string, lote?: string): Promise<IListEventoVendasDTO> {

    let where: any = { id_evento: id };

    if (lote)
      where = { ...where, id_evento_setor_lote: lote };

    const [result, total] = await this.repository.findAndCount({
      where,
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

    const count = await this.repository
      .createQueryBuilder()
      .where("id_evento_setor_lote = :id and (status = :status1 or status = :status2 or status = :status3 or status = :status4)", {
        id,
        status1: "paid",
        status2: "order.paid",
        status3: "waiting_payment",
        status4: "order.waiting_payment"
      })
      .orderBy("created_at", "ASC")
      .getCount();

    return count;
  }

  async deleteEventoVenda(id: string): Promise<void> {
    await this.repository.delete(id);
  }

}