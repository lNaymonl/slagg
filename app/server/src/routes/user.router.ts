import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
    res.send({
        username: "Elmo",
        email: "elmo@big.dick"
    });
})

export default router;
