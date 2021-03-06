import { injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserResponseDTO } from "../../dtos/IUserResponseDTO";
import { UsersRepositories } from "../../infra/typeorm/repositories/UsersRepositories";
import { UserMap } from "../../mapper/UserMap";


@injectable()
export class ProfileUserUseCase {

  constructor() { }

  async execute(user_id: string): Promise<IUserResponseDTO> {
    const userRepositories = new UsersRepositories();
    const user = await userRepositories.findById(user_id);

    if (!user)
      throw new AppError("Usuário inexistente")

    return UserMap.toDTO(user);
  }

}