import { Router } from "express";
import { AuthenticateClienteController } from "../../../../modules/clientes/useCases/authenticateCliente/AuthenticateClienteController";
import { CreateClienteController } from "../../../../modules/clientes/useCases/createCliente/CreateClienteController";
import { FindAllClienteController } from "../../../../modules/clientes/useCases/findAllCliente/FindAllClienteController";
import { FindClienteByIdController } from "../../../../modules/clientes/useCases/findClienteById/FindClienteByIdController";

const clienteRouter = Router();

const createCliente = new CreateClienteController();
const findById = new FindClienteByIdController();
const findAll = new FindAllClienteController();
const authenticateCliente = new AuthenticateClienteController();

clienteRouter.get("/", findAll.handle);

clienteRouter.post("/login", authenticateCliente.handle);

clienteRouter.get("/:id", findById.handle);

clienteRouter.post("/", createCliente.handle);

export { clienteRouter };