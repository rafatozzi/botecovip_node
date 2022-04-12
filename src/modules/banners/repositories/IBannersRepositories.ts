import { ICreateBannersDTO } from "../dtos/ICreateBannersDTO";
import { Banners } from "../infra/typeorm/entities/Banners";

export interface IBannersRepositories {
  create(data: ICreateBannersDTO): Promise<Banners>;
  findAllBanners(onlyVisibles: boolean): Promise<Banners[]>;
}