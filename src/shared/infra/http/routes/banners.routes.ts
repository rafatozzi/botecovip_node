import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { UpdateBannerController } from "../../../../modules/banners/useCases/changeVisibleBanner/updateBannerController";
import { CreateBannerController } from "../../../../modules/banners/useCases/createBanner/CreateBannerController";
import { FindAllBannersController } from "../../../../modules/banners/useCases/findAllBanners/FindAllBannersController";
import { EnsureAuthenticated } from "../middlewares/ensureAuthenticated";

const bannersRoutes = Router();
const uploadImage = multer(uploadConfig)

const createBanner = new CreateBannerController();
const findAllBanners = new FindAllBannersController();
const updateBanners = new UpdateBannerController();

bannersRoutes.get("/", findAllBanners.handle);
bannersRoutes.put("/", EnsureAuthenticated, updateBanners.handle);
bannersRoutes.post("/", EnsureAuthenticated, uploadImage.single("banners"), createBanner.handle);

export { bannersRoutes };