import { Router } from "express"
import { getUsers } from "../controllers/userController.js"

const route = Router()

route.get("/usuarios", getUsers)

export default route