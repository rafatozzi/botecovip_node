import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreateBannersDTO } from "../../../dtos/ICreateBannersDTO";
import { IBannersRepositories } from "../../../repositories/IBannersRepositories";
import { Banners } from "../entities/Banners";

export class BannersRepositories implements IBannersRepositories {
  private repository: Repository<Banners>;

  constructor() {
    this.repository = AppDataSource.getRepository(Banners);
  }

  async create(data: ICreateBannersDTO): Promise<Banners> {
    const item = this.repository.create({ ...data });

    await this.repository.save(item);

    return item;
  }

  async findAllBanners(onlyVisibles: boolean): Promise<Banners[]> {

    let where: any = {};

    if (onlyVisibles)
      where = { visivel: true };

    const result = await this.repository.find(
      {
        where,
        order: { created_at: "DESC" }
      }
    );

    return result;
  }

}