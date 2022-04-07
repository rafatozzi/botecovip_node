import { IClienteResponseDTO } from "../dtos/IClienteResponseDTO";
import { ICreateClientesDTO } from "../dtos/ICreateClientesDTO";
import { IFilterClienteDTO } from "../dtos/IFilterClienteDTO";
import { IListClientes } from "../dtos/IListClientes";

export interface IClientesRepositories {
  create(data: ICreateClientesDTO): Promise<IClienteResponseDTO>;
  findById(id: string): Promise<IClienteResponseDTO>;
  findAll(pesquisa?: IFilterClienteDTO, limit?: number, cursor?: number): Promise<IListClientes>;
  findTelefone(telefone: number): Promise<IClienteResponseDTO>;
}