import { injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { hash } from "bcrypt";
import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositories } from "../../infra/typeorm/repositories/UsersRepositories";

@injectable()
export class CreateUserUseCase {

  constructor() { }

  async execute(data: ICreateUserDTO): Promise<void> {
    const usersRepositories = new UsersRepositories();
    const alreadyExists = await usersRepositories.findByUser(data.user);

    if (!data.id && alreadyExists)
      throw new AppError("Usuário já cadastrado");

    if (data.senha) {
      const senhaHash = await hash(data.senha, 8);
      data.senha = senhaHash;
    }

    await usersRepositories.create(data);
  }

}