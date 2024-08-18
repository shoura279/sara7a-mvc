import { Router } from "express";
import { messages } from "./messages.controller.js";

const messageRouter = Router()
messageRouter.get('/', messages)
export default messageRouter