import { Router } from "express";
import getuserRouter from "./user/getuser.router";
import postuserRouter from "./user/postuser.router";

const router = Router();

router.use("/user/getuser", getuserRouter)
router.use("/user/postuser", postuserRouter)

export default router;