import { ICreateUserCidadeDTO } from "../dtos/ICreateUserCidadeDTO";
import { UsersCidades } from "../infra/typeorm/entities/UsersCidades";

export interface IUserCidadeRepositories {
  create(data: ICreateUserCidadeDTO): Promise<UsersCidades>;
  findByUserId(id: string): Promise<UsersCidades[]>;
  findByUserIdAndCidade(id: string, idCidade: string): Promise<UsersCidades[]>;
  deleteById(id: string): Promise<void>;
}