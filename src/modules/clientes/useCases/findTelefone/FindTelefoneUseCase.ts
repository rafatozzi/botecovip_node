import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IClienteResponseDTO } from "../../dtos/IClienteResponseDTO";
import { ClientesRepositories } from "../../infra/typeorm/repositories/ClientesRepositories";

@injectable()
export class FindTelefoneUseCase {

  constructor() { }

  async execute(telefone: number): Promise<IClienteResponseDTO> {
    const repository = new ClientesRepositories();

    const cliente = await repository.findTelefone(telefone);

    if (!cliente)
      throw new AppError("Cliente não encontrado");

    return cliente;
  }
}