import { injectable } from "tsyringe";
import { IFilterClienteDTO } from "../../dtos/IFilterClienteDTO";
import { IListClientes } from "../../dtos/IListClientes";
import { ClientesRepositories } from "../../infra/typeorm/repositories/ClientesRepositories";

@injectable()
export class FindAllClienteUseCase {
  constructor() { }

  async execute(pesquisa?: IFilterClienteDTO, limit?: number, cursor?: number): Promise<IListClientes> {
    const repository = new ClientesRepositories();

    const result = await repository.findAll(pesquisa, limit, cursor);

    return result;
  }
}