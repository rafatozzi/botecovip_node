import { container } from "tsyringe";
import { Request, Response } from "express";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateUserDTO;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute(data)

    return response.status(200).send();

  }
}