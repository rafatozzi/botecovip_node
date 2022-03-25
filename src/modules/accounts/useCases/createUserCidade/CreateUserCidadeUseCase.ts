import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserCidadeDTO } from "../../dtos/ICreateUserCidadeDTO";
import { UsersCidades } from "../../infra/typeorm/entities/UsersCidades";
import { UsersCidadesRepositories } from "../../infra/typeorm/repositories/UsersCidadesRepositories";

@injectable()
export class CreateUserCidadeUseCase {
  constructor() { }

  async execute(data: ICreateUserCidadeDTO): Promise<UsersCidades> {
    const repository = new UsersCidadesRepositories();
    const alreadyExists = repository.findByUserIdAndCidade(data.id, data.id_cidade);

    if (alreadyExists)
      throw new AppError("Cidade já cadastrada");

    const userCidade = repository.create(data);

    return userCidade;
  }
}