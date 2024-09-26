import path from "node:path"

import express from "express";
import { createServer } from "node:http";

import httpProxy from "http-proxy";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

const production = process.env["NODE_ENV"] == "production";

const CLIENT_REGEX = /^\/(?!api|ws|docs).*/;

// Swagger Mapping
import swaggerUi from "swagger-ui-express";
import apiDef from "@docs/api-defenition.json";
app.use("/docs", swaggerUi.serve, swaggerUi.setup(apiDef));

// API Mapping
import apiRouter from "./routes/api.router";
app.use("/api", apiRouter);

// TODO add the websocket using socket.io
// Preferably on the /ws route

// TODO add middleware for user and admin validation

// Client Mapping
// If in the production environment, just serves the built index.html file
// If in the development environment, the requests to "/*" are proxied to the client webserver
if (production) {
    app.use(express.static(path.resolve(__dirname, "./client")));
    
    app.get(CLIENT_REGEX, (_, res) => {
        res.appendHeader("Content-Type", "text/html");
        res.sendFile(path.resolve(__dirname, "./client/index.html"));
    });
} else {
    const clientProxy = httpProxy.createProxyServer({
        changeOrigin: true
    });

    const target = "http://localhost:5173/";
    
    app.get(CLIENT_REGEX, (req, res) => {
        clientProxy.web(req, res, { target });
    })
}

export default server;
