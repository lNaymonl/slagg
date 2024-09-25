import path from "node:path"

import express from "express";
import { createServer } from "node:http";

import httpProxy from "http-proxy";
import { Server } from "socket.io";

import apiRouter from "./routes/api.router";

const app = express();
const server = createServer(app);
const io = new Server(server);

const production = process.env["NODE_ENV"] == "production";

const clientRegex = /^\/(?!api|ws).*/;

app.use("/api", apiRouter);
// TODO add the websocket using socket.io
// Preferably on the /ws route

if (production) {
    app.use(express.static(path.resolve(__dirname, "./client")));
    
    app.get(clientRegex, (_, res) => {
        res.appendHeader("Content-Type", "text/html");
        res.sendFile(path.resolve(__dirname, "./client/index.html"));
    });
} else {
    const clientProxy = httpProxy.createProxyServer({
        changeOrigin: true
    });

    const target = "http://localhost:5173/";
    
    app.get(clientRegex, (req, res) => {
        clientProxy.web(req, res, { target });
    })
}

export default server;
