import { compare } from "bcrypt";
import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IClienteResponseDTO } from "../../dtos/IClienteResponseDTO";
import { ClientesRepositories } from "../../infra/typeorm/repositories/ClientesRepositories";
import { ClienteMap } from "../../mapper/ClienteMap";


@injectable()
export class AuthenticateClienteUseCase {
  constructor() { }

  async execute(telefone: number, senha: string): Promise<IClienteResponseDTO> {
    const clientesRepositories = new ClientesRepositories();

    const rsCliente = await clientesRepositories.findTelefoneToLogin(telefone);

    if (!rsCliente)
      throw new AppError("Cliente não encontrado");

    const senhaMatch = await compare(senha, rsCliente.senha);

    if (!senhaMatch)
      throw new AppError("Senha incorreta");

    return ClienteMap.toDTO(rsCliente);
  }
}