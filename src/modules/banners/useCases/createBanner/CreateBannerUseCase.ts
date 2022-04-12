import { injectable } from "tsyringe";
import { ICreateBannersDTO } from "../../dtos/ICreateBannersDTO";
import { Banners } from "../../infra/typeorm/entities/Banners";
import { BannersRepositories } from "../../infra/typeorm/repositories/BannersRepositories";

@injectable()
export class CreateBannerUseCase {
  constructor() { }

  async execute(data: ICreateBannersDTO): Promise<Banners> {
    const repository = new BannersRepositories();

    const item = repository.create(data);

    return item;
  }
}