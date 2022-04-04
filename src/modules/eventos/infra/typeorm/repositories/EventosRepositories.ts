import { In, Like, Repository, LessThanOrEqual } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreateEventoDTO } from "../../../dtos/ICreateEventoDTO";
import { IFilterEventosDTO } from "../../../dtos/IFilterEventosDTO";
import { IListEventosDTO } from "../../../dtos/IListEventosDTO";
import { IEventosRepositories } from "../../../repositories/IEventosRepositories";
import { Eventos } from "../entities/Eventos";

export class EventosRepositories implements IEventosRepositories {
  private repository: Repository<Eventos>;

  constructor() {
    this.repository = AppDataSource.getRepository(Eventos);
  }

  async create(data: ICreateEventoDTO): Promise<Eventos> {
    const item = this.repository.create(data);
    await this.repository.save(item);

    return item;
  }

  async findById(id: string): Promise<Eventos> {
    return await this.repository.findOne({
      where: { id },
      relations: [
        "cidade",
        "setores",
        "setores.lotes"
        // "vendas"
      ]
    });
  }

  async findAllEventos(pesquisa?: IFilterEventosDTO, limit?: number, cursor?: number): Promise<IListEventosDTO> {
    const limitPage = limit ? limit : 25;
    const cursorPage = cursor ? cursor : 0;

    let where: any = { excluir: false };

    if (pesquisa) {
      if (pesquisa.data)
        where = { ...where, data: pesquisa.data };

      if (pesquisa.endereco)
        where = { ...where, endereco: Like(`%${pesquisa.endereco}%`) };

      if (pesquisa.inicioVendas)
        where = { ...where, inicio_vendas: pesquisa.inicioVendas };

      if (pesquisa.inicioVendasAte)
        where = { ...where, inicio_vendas: LessThanOrEqual(pesquisa.inicioVendas) };

      if (pesquisa.local)
        where = { ...where, inicio_vendas: Like(`%${pesquisa.inicioVendas}%`) };

      if (pesquisa.nome)
        where = { ...where, nome: Like(`%${pesquisa.nome}%`) };

      if (pesquisa.cidades && pesquisa.cidades.length > 0)
        where = { ...where, id_cidade: In(pesquisa.cidades) };
    }

    const [result, total] = await this.repository.findAndCount({
      order: { data: "DESC" },
      take: limitPage,
      skip: cursorPage,
      where,
      relations: ["cidade"]
    });

    return {
      total,
      result
    }
  }

  async deleteEvento(id: string): Promise<void> {
    const item = await this.repository.findOne({ where: { id } });
    item.excluir = true;
    await this.repository.save(item);
  }

}