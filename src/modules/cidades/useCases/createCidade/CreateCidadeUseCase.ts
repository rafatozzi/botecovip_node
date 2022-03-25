import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateCidade } from "../../dtos/ICreateCidade";
import { Cidades } from "../../infra/typeorm/entities/Cidades";
import { CidadesRepositories } from "../../infra/typeorm/repositories/CidadesRepositories";

@injectable()
export class CreateCidadeUseCase {
  constructor() { }

  async execute(data: ICreateCidade): Promise<Cidades> {
    const repository = new CidadesRepositories();
    const alreadyExists = await repository.findByNomeEstado(data.nome, data.estado);

    if (alreadyExists)
      throw new AppError("Cidade já cadastrada");

    const cidade = await repository.create(data);
    return cidade;
  }
}