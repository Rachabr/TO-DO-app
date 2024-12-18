import express from "express";
import {
  creattask,
  gettaskes,
  gettask,
  delettask,
  updatetask,
} from "../controllers/taskControllers.js";
import { authentication } from "../middleWares/authentication.js";

const router = express.Router();

router.use(authentication)

router.get("/", gettaskes);

router.get("/:id", gettask);

router.post("/", creattask);

router.delete("/:id", delettask);

router.put("/:id", updatetask);

export default router;
