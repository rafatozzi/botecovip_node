import { injectable } from "tsyringe";
import { IListCidades } from "../../dtos/IListCidades";
import { CidadesRepositories } from "../../infra/typeorm/repositories/CidadesRepositories";


@injectable()
export class FindAllCidadesUseCase {
  constructor() { }

  async execute(limit?: number, cursor?: number): Promise<IListCidades> {
    const repository = new CidadesRepositories();

    const result = await repository.findAll(limit, cursor);

    return result;
  }
}