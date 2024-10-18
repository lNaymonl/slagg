import { server } from "./server";
import { migrateDatabase } from "@database/migrate"

// TODO load these from .env file or something
const PORT = 5050;
const HOSTNAME = "localhost";
(async () => {
    await migrateDatabase();
    
    server.listen(PORT, HOSTNAME, () => {
        console.info(`Server now running on: http://${HOSTNAME}:${PORT}`);
    });
})()
