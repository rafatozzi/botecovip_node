import { IClienteResponseDTO } from "../dtos/IClienteResponseDTO";
import { ICreateClientesDTO } from "../dtos/ICreateClientesDTO";
import { IListClientes } from "../dtos/IListClientes";
import { Clientes } from "../infra/typeorm/entities/Clientes";

export interface IClientesRepositories {
  create(data: ICreateClientesDTO): Promise<Clientes>;
  findById(id: string): Promise<IClienteResponseDTO>;
  findAll(limit?: number, cursor?: number): Promise<IListClientes>;
  findTelefone(telefone: number): Promise<IClienteResponseDTO>;
}