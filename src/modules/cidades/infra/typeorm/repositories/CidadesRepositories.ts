import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreateCidade } from "../../../dtos/ICreateCidade";
import { IListCidades } from "../../../dtos/IListCidades";
import { ICidadesRepositories } from "../../../repositories/ICidadesRepositories";
import { Cidades } from "../entities/Cidades";

export class CidadesRepositories implements ICidadesRepositories {
  private repository: Repository<Cidades>;

  constructor() {
    this.repository = AppDataSource.getRepository(Cidades);
  }

  async create(data: ICreateCidade): Promise<Cidades> {
    const user = this.repository.create({ ...data });

    await this.repository.save(user);

    return user;
  }

  async findByNomeEstado(cidade: string, estado: string): Promise<Cidades> {
    const result = await this.repository.findOne({
      where: {
        nome: cidade,
        estado
      }
    });

    return result;
  }

  async findById(id: string): Promise<Cidades> {
    const result = await this.repository.findOne({
      where: { id }
    });

    return result;
  }

  async findAll(limit?: number, cursor?: number): Promise<IListCidades> {
    const limitPage = limit ? limit : 150;
    const cursorPage = cursor ? cursor : 0;

    const [result, total] = await this.repository.findAndCount(
      {
        where: { excluir: false },
        order: { estado: "ASC", nome: "ASC" },
        take: limitPage,
        skip: cursorPage
      }
    );

    return {
      result,
      total
    };

  }

  async delete(id: string): Promise<void> {
    const cidade = await this.repository.findOne({ where: { id } });

    cidade.excluir = true;

    await this.repository.save(cidade);
  }

}