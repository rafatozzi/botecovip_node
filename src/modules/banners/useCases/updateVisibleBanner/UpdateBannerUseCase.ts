import { injectable } from "tsyringe";
import { ICreateBannersDTO } from "../../dtos/ICreateBannersDTO";
import { Banners } from "../../infra/typeorm/entities/Banners";
import { BannersRepositories } from "../../infra/typeorm/repositories/BannersRepositories";

@injectable()
export class UpdateBannerUseCase {
  constructor() { }

  async execute(data: ICreateBannersDTO): Promise<Banners> {
    const repositories = new BannersRepositories();

    const item = await repositories.create(data);

    return item;
  }
}