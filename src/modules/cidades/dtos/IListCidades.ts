import { Cidades } from "../infra/typeorm/entities/Cidades";

export interface IListCidades {
  total: number;
  result: Cidades[];
}