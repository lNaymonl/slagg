import { Router } from "express";
import userRouter from "./user.router";
import testRouter from "./test.router"

const router = Router();

router.use("/user", userRouter);
// TODO remove test Router for prod
router.use("/test", testRouter);

export default router;