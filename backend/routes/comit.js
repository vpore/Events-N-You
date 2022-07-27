import Express from "express";
import { comreq } from "../controllers/creq.js";
import { getRequests } from "../controllers/requests.js";

const comrouter = Express.Router();

comrouter.post("/request", comreq);
comrouter.get("/", getRequests);

export default comrouter;