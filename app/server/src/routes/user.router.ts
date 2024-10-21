import { Request, Response } from 'express';
import { Router } from "express";
import  jwt from 'jsonwebtoken';
import { getPrivateKey } from '../util/secret-provider'


const router = Router();

router.post("/login",( req: Request, res: Response) => {
    const { username, password } = req.body;
        if( username === "Karl" && password === "test"){
            const payload = { username };

            const token = jwt.sign(payload, getPrivateKey(), {
                algorithm: 'RS256',
                expiresIn: '1h',
            });
            res.json({
                success: true,
                token,
            });
        }
    }
);

export default router;