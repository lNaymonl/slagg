import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getPrivateKey } from '../util/secret-provider'

export function jwtVal(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;
    const jwtSecret = getPrivateKey();

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).json({message: 'Invalid or expired token'});
        }else {
            next();
        }
    });
}