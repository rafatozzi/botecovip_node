import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { bannersRoutes } from "./banners.routes";
import { cidadesRouter } from "./cidades.routes";
import { clienteRouter } from "./clientes.routes";
import { eventosRouter } from "./eventos.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/cidades", cidadesRouter);
router.use("/clientes", clienteRouter);
router.use("/eventos", eventosRouter);
router.use("/banners", bannersRoutes);

router.use(authenticateRoutes);

export { router };