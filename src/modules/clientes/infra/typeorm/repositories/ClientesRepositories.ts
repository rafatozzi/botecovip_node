import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IClienteResponseDTO } from "../../../dtos/IClienteResponseDTO";
import { ICreateClientesDTO } from "../../../dtos/ICreateClientesDTO";
import { IListClientes } from "../../../dtos/IListClientes";
import { ClienteMap } from "../../../mapper/ClienteMap";
import { IClientesRepositories } from "../../../repositories/IClientesRepositories";
import { Clientes } from "../entities/Clientes";

export class ClientesRepositories implements IClientesRepositories {
  private repository: Repository<Clientes>;

  constructor() {
    this.repository = AppDataSource.getRepository(Clientes);
  }

  async findTelefone(telefone: number): Promise<IClienteResponseDTO> {
    const result = await this.repository.findOne({
      where: { telefone }
    });

    return ClienteMap.toDTO(result);
  }

  async create(data: ICreateClientesDTO): Promise<Clientes> {
    const cliente = this.repository.create({ ...data });

    await this.repository.save(cliente);

    return cliente;
  }

  async findById(id: string): Promise<IClienteResponseDTO> {
    const result = await this.repository.findOne({
      where: { id }
    });

    return ClienteMap.toDTO(result);
  }

  async findAll(limit?: number, cursor?: number): Promise<IListClientes> {
    const limitPage = limit ? limit : 25;
    const cursorPage = cursor ? cursor : 0;

    const [result, total] = await this.repository.findAndCount(
      {
        order: { nome: "ASC" },
        take: limitPage,
        skip: cursorPage
      }
    )

    const list = result.map((rs) => {
      return ClienteMap.toDTO(rs);
    })

    return {
      result: list,
      total
    };
  }

}