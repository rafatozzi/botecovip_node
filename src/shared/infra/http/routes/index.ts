import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { cidadesRouter } from "./cidades.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/cidades", cidadesRouter);

router.use(authenticateRoutes);

export { router };