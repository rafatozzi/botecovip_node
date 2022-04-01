import { Router } from "express";
import { CreateEventoController } from "../../../../modules/eventos/useCases/createEvento/CreateEventoController";
import { CreateEventoSetorController } from "../../../../modules/eventos/useCases/createEventoSetor/CreateEventoSetorController";
import { CreateEventoSetorLoteController } from "../../../../modules/eventos/useCases/createEventoSetorLote/CreateEventoSetorLoteController";
import { CreateEventoVendaController } from "../../../../modules/eventos/useCases/createEventoVenda/CreateEventoVendaController";
import { DeleteEventoController } from "../../../../modules/eventos/useCases/deleteEvento/DeleteEventoController";
import { DeleteEventoSetorController } from "../../../../modules/eventos/useCases/deleteEventoSetor/DeleteEventoSetorController";
import { DeleteEventoSetorLoteController } from "../../../../modules/eventos/useCases/deleteEventoSetorLote/DeleteEventoSetorLoteController";
import { FindAllEventosController } from "../../../../modules/eventos/useCases/findAllEventos/FindAllEventosController";
import { FindEventoByIdController } from "../../../../modules/eventos/useCases/findEventoById/FindEventoByIdController";
import { FindLoteBySetorController } from "../../../../modules/eventos/useCases/findLoteBySetor/FindLoteBySetorController";
import { FindSetoresByEventoController } from "../../../../modules/eventos/useCases/findSetoresByEvento/FindSetoresByEventoController";
import { FindVendasByEventoController } from "../../../../modules/eventos/useCases/findVendasByEvento/FindVendasByEventoController";
import { EnsureAuthenticated } from "../middlewares/ensureAuthenticated";

const eventosRouter = Router();

const createEventoController = new CreateEventoController();
const createEventoSetorController = new CreateEventoSetorController();
const createEventoSetorLoteController = new CreateEventoSetorLoteController();
const createEventoVendaController = new CreateEventoVendaController();
const deleteEventoController = new DeleteEventoController();
const deleteEventoSetorController = new DeleteEventoSetorController();
const deleteEventoSetorLoteController = new DeleteEventoSetorLoteController();
const findAllEventosController = new FindAllEventosController();
const findEventoByIdController = new FindEventoByIdController();
const findLoteBySetorController = new FindLoteBySetorController();
const findSetoresByEventoController = new FindSetoresByEventoController();
const findVendasByEventoController = new FindVendasByEventoController();

eventosRouter.post("/", EnsureAuthenticated, createEventoController.handle);
eventosRouter.post("/setor", EnsureAuthenticated, createEventoSetorController.handle);
eventosRouter.post("/lote", EnsureAuthenticated, createEventoSetorLoteController.handle);
eventosRouter.post("/venda", createEventoVendaController.handle);
eventosRouter.post("/list", findAllEventosController.handle);

eventosRouter.delete("/", EnsureAuthenticated, deleteEventoController.handle);
eventosRouter.delete("/setor", EnsureAuthenticated, deleteEventoSetorController.handle);
eventosRouter.delete("/lote", EnsureAuthenticated, deleteEventoSetorLoteController.handle);

eventosRouter.get("/", findAllEventosController.handle);
eventosRouter.get("/lote", findLoteBySetorController.handle);
eventosRouter.get("/setor", findSetoresByEventoController.handle);
eventosRouter.get("/vendas", findVendasByEventoController.handle);
eventosRouter.get("/:id", findEventoByIdController.handle);

export { eventosRouter };