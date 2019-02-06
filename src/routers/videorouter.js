import express from "express";
import routes from "../routes";
import { getUpload, postUpload } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

export default videoRouter;
