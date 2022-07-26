import Express from "express";
import { signin } from "../controllers/userlogin.js";

const router = Express.Router();

router.post("/signin", signin);

export default router;