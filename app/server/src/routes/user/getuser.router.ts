import { Router } from "express";
import { drizzle } from "drizzle-orm/connect";
import { usersTable } from "@database/schema/user"

const getuserRouter = Router();

getuserRouter.get("/", async(_, res) => {
    const db = await drizzle("libsql", process.env["DB_FILE_NAME"]!);
    const user = await db.select().from(usersTable)
    res.send(user);
})

export default getuserRouter;