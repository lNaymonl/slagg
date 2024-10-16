import { int, sqliteTable, text,  } from "drizzle-orm/sqlite-core";
import { v4 as uuidv4 } from "uuid";
import { channel} from "./channel"


export const message = sqliteTable("message", {
    messageId: text().$defaultFn(uuidv4).primaryKey().unique(),
    channelId: int().notNull().references(() => channel.channelId),
    createdAt: int("created_at", { mode: "timestamp" }).notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).notNull(),
    value : text().notNull(),
})