import { Router } from "express";
import { UserService } from "../services/userService.js";
import { userValidationMiddleware } from "../tools/tools.js";

export const userRouter = Router()
const userService = UserService

userRouter.post('/sign-up', userService.saveUser)
userRouter.post('/sign-in', userService.findUser)