import { Router } from "express";
import { drizzle } from "drizzle-orm/connect";
import { channel } from "@database/schema/channel"

const getchannelRouter = Router();

getchannelRouter.get("/", async(_, res) => {
    const db = await drizzle("libsql", process.env["DB_FILE_NAME"]!);
    const getchannel = await db.select().from(channel)
    res.send(getchannel);
})

export default getchannelRouter;