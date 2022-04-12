import { Router } from "express";
import { CreateBannerController } from "../../../../modules/banners/useCases/createBanner/CreateBannerController";
import { FindAllBannersController } from "../../../../modules/banners/useCases/findAllBanners/FindAllBannersController";
import { EnsureAuthenticated } from "../middlewares/ensureAuthenticated";

const bannersRoutes = Router();

const createBanner = new CreateBannerController();
const findAllBanners = new FindAllBannersController();

bannersRoutes.get("/", findAllBanners.handle);
bannersRoutes.post("/", EnsureAuthenticated, createBanner.handle);

export { bannersRoutes };