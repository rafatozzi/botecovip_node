import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { CountVendasLoteController } from "../../../../modules/eventos/useCases/countVendasLote/CountVendasLoteController";

import { CreateEventoController } from "../../../../modules/eventos/useCases/createEvento/CreateEventoController";
import { CreateEventoSetorController } from "../../../../modules/eventos/useCases/createEventoSetor/CreateEventoSetorController";
import { CreateEventoSetorLoteController } from "../../../../modules/eventos/useCases/createEventoSetorLote/CreateEventoSetorLoteController";
import { CreateEventoVendaController } from "../../../../modules/eventos/useCases/createEventoVenda/CreateEventoVendaController";
import { DeleteEventoController } from "../../../../modules/eventos/useCases/deleteEvento/DeleteEventoController";
import { DeleteEventoSetorController } from "../../../../modules/eventos/useCases/deleteEventoSetor/DeleteEventoSetorController";
import { DeleteEventoSetorLoteController } from "../../../../modules/eventos/useCases/deleteEventoSetorLote/DeleteEventoSetorLoteController";
import { EventoPaySuccessController } from "../../../../modules/eventos/useCases/eventoPaySuccess/EventoPaySuccessController";
import { FindAllEventosController } from "../../../../modules/eventos/useCases/findAllEventos/FindAllEventosController";
import { FindEventoByIdController } from "../../../../modules/eventos/useCases/findEventoById/FindEventoByIdController";
import { FindLoteBySetorController } from "../../../../modules/eventos/useCases/findLoteBySetor/FindLoteBySetorController";
import { FindSetoresByEventoController } from "../../../../modules/eventos/useCases/findSetoresByEvento/FindSetoresByEventoController";
import { FindVendasByEventoController } from "../../../../modules/eventos/useCases/findVendasByEvento/FindVendasByEventoController";
import { UploadImageController } from "../../../../modules/eventos/useCases/uploadImage/UploadImageController";
import { EnsureAuthenticated } from "../middlewares/ensureAuthenticated";

const eventosRouter = Router();
const uploadImage = multer(uploadConfig);

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
const uploadImageController = new UploadImageController();
const countVendasLoteController = new CountVendasLoteController();
const eventoPaySuccessController = new EventoPaySuccessController();


eventosRouter.post("/", createEventoController.handle);
eventosRouter.post("/setor", EnsureAuthenticated, createEventoSetorController.handle);
eventosRouter.post("/lote", EnsureAuthenticated, createEventoSetorLoteController.handle);
eventosRouter.post("/venda", createEventoVendaController.handle);
eventosRouter.post("/list", findAllEventosController.handle);
eventosRouter.post("/vendas/list", findVendasByEventoController.handle);
eventosRouter.post("/vendas/count", countVendasLoteController.handle);

eventosRouter.delete("/", EnsureAuthenticated, deleteEventoController.handle);
eventosRouter.delete("/setor", EnsureAuthenticated, deleteEventoSetorController.handle);
eventosRouter.delete("/lote", EnsureAuthenticated, deleteEventoSetorLoteController.handle);

eventosRouter.get("/", findAllEventosController.handle);
eventosRouter.get("/lote", findLoteBySetorController.handle);
eventosRouter.get("/setor", findSetoresByEventoController.handle);
eventosRouter.get("/vendas", findVendasByEventoController.handle);
eventosRouter.get("/:id", findEventoByIdController.handle);

eventosRouter.patch("/image", EnsureAuthenticated, uploadImage.single("images"), uploadImageController.handle);

eventosRouter.post("/pagar_me_hook", eventoPaySuccessController.handle);

export { eventosRouter };