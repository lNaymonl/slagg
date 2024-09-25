import server from "./server";

// TODO load these from .env file or something
const PORT = 5050;
const HOSTNAME = "localhost";

server.listen(PORT, HOSTNAME, () => {
    console.info(`Server now running on: http://${HOSTNAME}:${PORT}`);
});
