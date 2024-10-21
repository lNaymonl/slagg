import { Router } from "express";

import { HttpResponseModel, JwtResponseModel } from "@common/models/response";

const router = Router();

router.get("/:userId", (_, res) => {
    res.send([
        {
            "userId": 69420,
            "firstName": "Max",
            "lastName": "Mustermann",
            "email": "max.mustermann@example.com"
          }
    ]);
});

router.get("/", (_, res) => {
    res.send([
        {
            "userId": 69420,
            "firstName": "Max",
            "lastName": "Mustermann",
            "email": "max.mustermann@example.com"
          }
    ]);
});

router.post("/login", (req, res) => {
    console.log(req.body);
    if (req.body.email == "abc@a.b" && req.body.password == "hehehehe") {
        const response: JwtResponseModel = {
            bearerToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZpcnN0TmFtZSI6IkVsbW8iLCJsYXN0TmFtZSI6IkhlaW5lIiwiZW1haWwiOiJlbG1vLmhlaW5lQHdlYi5kZSIsInVzZXJOYW1lIjpudWxsLCJleHAiOiIyMDI1LTExLTIwVDIzOjAwOjAwLjAwMFoifQ.5kgJDbqgxEasJXNZxhgCfx0KYrT-tcgMCNw1IcfzRiY"
        };
        res.json(response);
    } else {
        const badRequest: HttpResponseModel = {
            ok: false,
            statusCode: 400,
            message: "No user with the given credentials"
        };
        res.statusCode = badRequest.statusCode;
        res.json(badRequest);
    }
});

export default router;
