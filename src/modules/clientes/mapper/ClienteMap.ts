import { instanceToInstance } from "class-transformer";
import { IClienteResponseDTO } from "../dtos/IClienteResponseDTO";
import { Clientes } from "../infra/typeorm/entities/Clientes";

export class ClienteMap {
  static toDTO({ id, nome, telefone }: Clientes): IClienteResponseDTO {
    const result = instanceToInstance({
      id,
      nome,
      telefone
    });

    return result;
  }
}