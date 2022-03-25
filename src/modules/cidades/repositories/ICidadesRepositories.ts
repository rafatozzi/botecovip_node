import { ICreateCidade } from "../dtos/ICreateCidade";
import { IListCidades } from "../dtos/IListCidades";
import { Cidades } from "../infra/typeorm/entities/Cidades";


export interface ICidadesRepositories {
  create(data: ICreateCidade): Promise<Cidades>;
  findByNomeEstado(cidade: string, estado: string): Promise<Cidades>;
  findById(id: string): Promise<Cidades>;
  findAll(limit?: number, cursor?: number): Promise<IListCidades>;
  delete(id: string): Promise<void>;
}