import { Router } from "express";


import getuserRouter from "./user/getuser.router";
import postuserRouter from "./user/postuser.router";


import getsettingsRouter from "./settings/getsettings.router";
import postsettingsRouter from "./settings/postsettings.router";


import getchannelRouter from "./channel/getchannel.router";
import postchannelRouter from "./channel/postchannel.router";

const router = Router();

router.use("/user/getuser", getuserRouter)
router.use("/user/postuser", postuserRouter)

router.use("/settings/getsettings", getsettingsRouter)
router.use("/settings/postsettings", postsettingsRouter)

router.use("/channel/getchannel", getchannelRouter)
router.use("/channel/postchannel", postchannelRouter)

export default router;