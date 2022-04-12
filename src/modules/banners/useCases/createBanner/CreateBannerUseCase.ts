import { inject, injectable } from "tsyringe";
import { existsSync } from "fs";
import { resolve } from "path";
import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/IStorageProvider";
import { ICreateBannersDTO } from "../../dtos/ICreateBannersDTO";
import { Banners } from "../../infra/typeorm/entities/Banners";
import { BannersRepositories } from "../../infra/typeorm/repositories/BannersRepositories";
import upload from "../../../../config/upload";

@injectable()
export class CreateBannerUseCase {
  constructor(
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) { }

  async execute(data: ICreateBannersDTO, file: string): Promise<Banners> {
    const repository = new BannersRepositories();

    const item = await repository.create(data);

    const fileName = `${item.id}.jpg`;
    const oldFile = existsSync(resolve(`${upload.tmpFolder}/banners`, fileName));

    if (oldFile)
      await this.storageProvider.delete(fileName, "banners");

    await this.storageProvider.save(file, "banners", fileName);

    return item;
  }
}