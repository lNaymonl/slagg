import { Router } from "express";
import { drizzle } from "drizzle-orm/connect";
import { settingsTable } from "@database/schema/settings"

const getsettingsRouter = Router();

getsettingsRouter.get("/", async(_, res) => {
    const db = await drizzle("libsql", process.env["DB_FILE_NAME"]!);
    const getsetting = await db.select().from(settingsTable)
    res.send(getsetting);
})

export default getsettingsRouter;