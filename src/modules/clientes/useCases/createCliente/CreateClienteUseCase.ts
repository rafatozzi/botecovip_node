import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateClientesDTO } from "../../dtos/ICreateClientesDTO";
import { Clientes } from "../../infra/typeorm/entities/Clientes";
import { ClientesRepositories } from "../../infra/typeorm/repositories/ClientesRepositories";

@injectable()
export class CreateClienteUseCase {
  constructor() { }

  async execute(data: ICreateClientesDTO): Promise<Clientes> {
    const repository = new ClientesRepositories();

    const alreadyExists = await repository.findTelefone(data.telefone);

    if (alreadyExists)
      throw new AppError("Cliente já cadastrado");

    const result = await repository.create(data);

    return result;
  }
}