import { hash } from "bcrypt";
import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IClienteResponseDTO } from "../../dtos/IClienteResponseDTO";
import { ICreateClientesDTO } from "../../dtos/ICreateClientesDTO";
import { ClientesRepositories } from "../../infra/typeorm/repositories/ClientesRepositories";

@injectable()
export class CreateClienteUseCase {
  constructor() { }

  async execute(data: ICreateClientesDTO): Promise<IClienteResponseDTO> {
    const repository = new ClientesRepositories();

    if (!data.id) {
      const alreadyExists = await repository.findTelefone(data.telefone);

      if (alreadyExists)
        throw new AppError("Cliente já cadastrado");
    }

    const senhaHash = await hash(data.senha, 8);
    data.senha = senhaHash;

    const result = await repository.create(data);

    return result;
  }
}