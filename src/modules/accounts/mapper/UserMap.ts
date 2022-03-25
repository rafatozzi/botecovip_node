import { instanceToInstance } from "class-transformer";
import { IUserResponseDTO } from "../dtos/IUserResponseDTO"
import { Users } from "../infra/typeorm/entities/Users";

export class UserMap {
  static toDTO({ nome, id, admin, user, cidades }: Users): IUserResponseDTO {
    const result = instanceToInstance({
      id,
      user,
      nome,
      admin,
      cidades
    });

    return result;
  }
}