import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CidadesRepositories } from "../../infra/typeorm/repositories/CidadesRepositories";


@injectable()
export class DeleteCidadeUseCase {
  constructor() { }

  async execute(id: string): Promise<void> {
    const repository = new CidadesRepositories();
    const cidade = await repository.findById(id);

    if (!cidade)
      throw new AppError("Cidade não encontrada");

    await repository.delete(id);
  }
}