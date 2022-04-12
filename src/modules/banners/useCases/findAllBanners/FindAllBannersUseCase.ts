import { injectable } from "tsyringe";
import { Banners } from "../../infra/typeorm/entities/Banners";
import { BannersRepositories } from "../../infra/typeorm/repositories/BannersRepositories";

@injectable()
export class FindAllBannersUseCase {
  constructor() { }

  async execute(onlyVisibles: boolean): Promise<Banners[]> {
    const repositories = new BannersRepositories();

    const banners = await repositories.findAllBanners(onlyVisibles);

    return banners;
  }
}