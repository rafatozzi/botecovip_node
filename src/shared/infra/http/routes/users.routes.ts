import { Router } from "express"

import { EnsureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { ProfileUserController } from "../../../../modules/accounts/useCases/profileUser/ProfileUserController";
import { ListUsersController } from "../../../../modules/accounts/useCases/listUsers/ListUsersController";
import { CreateUserCidadeController } from "../../../../modules/accounts/useCases/createUserCidade/CreateUserCidadeController";
import { DeleteUserCidadeController } from "../../../../modules/accounts/useCases/deleteUserCidade/DeleteUserCidadeController";

const usersRouter = Router();

const createUserController = new CreateUserController();
const profileUserController = new ProfileUserController();
const listUsersController = new ListUsersController();
const createUserCidadeController = new CreateUserCidadeController();
const deleteUserCidadeController = new DeleteUserCidadeController();

usersRouter.post("/", createUserController.handle);

usersRouter.get("/list", EnsureAuthenticated, listUsersController.handle);

usersRouter.get("/:id", EnsureAuthenticated, profileUserController.handle);

usersRouter.post("/cidade", EnsureAuthenticated, createUserCidadeController.handle);
usersRouter.delete("/cidade", EnsureAuthenticated, deleteUserCidadeController.handle);

export { usersRouter };