import { IClienteResponseDTO } from "./IClienteResponseDTO";

export interface IListClientes {
  total: number;
  result: IClienteResponseDTO[];
}