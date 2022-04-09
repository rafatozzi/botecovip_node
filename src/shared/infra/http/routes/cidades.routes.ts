import { Router } from "express";
import { CreateCidadeController } from "../../../../modules/cidades/useCases/createCidade/CreateCidadeController";
import { DeleteCidadeController } from "../../../../modules/cidades/useCases/deleteCidade/DeleteCidadeController";
import { FindAllCidadesControllet } from "../../../../modules/cidades/useCases/findAllCidades/FindAllCidadesControllet";
import { FindCidadeByIdController } from "../../../../modules/cidades/useCases/findCidadeById/FindCidadeByIdController";
import { EnsureAuthenticated } from "../middlewares/ensureAuthenticated";

const cidadesRouter = Router();

const createCidade = new CreateCidadeController();
const deleteCidade = new DeleteCidadeController();
const findAllCidades = new FindAllCidadesControllet();
const findCidadeById = new FindCidadeByIdController();

cidadesRouter.get("/", findAllCidades.handle);
cidadesRouter.get("/:id", EnsureAuthenticated, findCidadeById.handle);

cidadesRouter.post("/", EnsureAuthenticated, createCidade.handle);
cidadesRouter.delete("/", EnsureAuthenticated, deleteCidade.handle);

export { cidadesRouter };