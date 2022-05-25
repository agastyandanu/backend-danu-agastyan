import jwt from 'jsonwebtoken';
import * as Process from "process";

export function jwtUserData(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader;
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, Process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}