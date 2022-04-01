import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/IStorageProvider";
import { EventosRepositories } from "../../infra/typeorm/repositories/EventosRepositories";
import { existsSync } from "fs";
import { resolve } from "path";
import upload from "../../../../config/upload";

@injectable()
export class UploadImageUseCase {

  constructor(
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) { }

  async execute(eventoId: string, file: string): Promise<void> {
    const fileName = `${eventoId}.jpg`;
    const oldFile = existsSync(resolve(`${upload.tmpFolder}/images`, fileName));

    if (oldFile)
      await this.storageProvider.delete(fileName, "images");

    await this.storageProvider.save(file, "images", fileName);
  }

}