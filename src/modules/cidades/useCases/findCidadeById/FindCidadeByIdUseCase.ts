import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Cidades } from "../../infra/typeorm/entities/Cidades";
import { CidadesRepositories } from "../../infra/typeorm/repositories/CidadesRepositories";


@injectable()
export class FindCidadeByIdUseCase {
  constructor() { }

  async execute(id: string): Promise<Cidades> {
    const repository = new CidadesRepositories();
    const cidade = await repository.findById(id);

    if (!cidade)
      throw new AppError("Cidade não encontrada");

    return cidade;
  }
}