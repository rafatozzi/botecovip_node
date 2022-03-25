import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { UsersCidadesRepositories } from "../../infra/typeorm/repositories/UsersCidadesRepositories";


@injectable()
export class DeleteUserCidadeUseCase {
  constructor() { }

  async execute(id: string): Promise<void> {
    const repository = new UsersCidadesRepositories();
    const userCidade = repository.deleteById(id);

    if (!userCidade)
      throw new AppError("Cadastro não encontrado");

    await repository.deleteById(id);
  }
}