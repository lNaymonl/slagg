import { int, sqliteTable, text, primaryKey} from "drizzle-orm/sqlite-core";
import { usersTable } from "./user";

export const settingsTable = sqliteTable("settings", {
  settingId: text().notNull(),
  value: text(),
  userId: int().notNull().references(() => usersTable.userId),
  }, (table) => {
    return {
      pk: primaryKey({ columns: [table.settingId, table.userId]}),
    };
});