import express from "express"
import { login, register } from "../controllers/userControllers.js"

const router = express.Router()

//loging routers

router.post("/login", login)

//register router
router.post("/register", register)


export default router