import { Router } from "express";
import getuserRouter from "./user/getuser.router";
import postuserRouter from "./user/postuser.router";
import getsettingsRouter from "./settings/getsettings.router";
import postsettingsRouter from "./settings/postsettings.router";

const router = Router();

router.use("/user/getuser", getuserRouter)
router.use("/user/postuser", postuserRouter)

router.use("/settings/getsettings", getsettingsRouter)
router.use("/settings/postsettings", postsettingsRouter)

export default router;