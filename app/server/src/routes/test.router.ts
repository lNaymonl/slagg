// TODO this is a Test Router Remove for prod
//
import {jwtVal} from "../middleware/jwtValidator";
import {Request, Response, Router} from "express";

const router = Router();

router.get("/", jwtVal,(req : Request, res: Response) => {
    res.send({
        message: "Worked"
    });
})

export default router;