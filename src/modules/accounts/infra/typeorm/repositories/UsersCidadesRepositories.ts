import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreateUserCidadeDTO } from "../../../dtos/ICreateUserCidadeDTO";
import { IUserCidadeRepositories } from "../../../repositories/IUserCidadeRepositories";
import { UsersCidades } from "../entities/UsersCidades";

export class UsersCidadesRepositories implements IUserCidadeRepositories {
  private repository: Repository<UsersCidades>;

  constructor() {
    this.repository = AppDataSource.getRepository(UsersCidades);
  }

  async findByUserIdAndCidade(user_id: string, idCidade: string): Promise<UsersCidades[]> {
    const userCidades = await this.repository.find({
      where: {
        user_id,
        id_cidade: idCidade
      }
    })

    return userCidades;
  }

  async create(data: ICreateUserCidadeDTO): Promise<UsersCidades> {
    const userCidade = this.repository.create({ ...data });

    await this.repository.save(userCidade);

    return userCidade;
  }

  async findByUserId(id: string): Promise<UsersCidades[]> {
    const userCidades = this.repository.find({
      where: { id }
    })

    return userCidades;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

}