import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";


export const channel = sqliteTable("channel", {
    channelId: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    createdAt: int("created_at", { mode: "timestamp" }).notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).notNull(),
  });