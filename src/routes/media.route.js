import { Router } from "express";
import controllers from "../controllers";
const router = Router();
const {mediaController} = controllers
router.post(
    '/media/upload/:mediaType/:mediaFor',
    mediaController.uploadMedia
)

export default router;