import { int, sqliteTable, text, primaryKey} from "drizzle-orm/sqlite-core";
import { usersTable } from "./user";

export const settingsTable = sqliteTable("settings", {
  settingId: text().notNull(),
  settingName: text().notNull(),
  settingInputType: text().notNull(),
  value: text(),
  userId: int().notNull().references(() => usersTable.userId),
  //options: Ggfs Multiselect als Array
  }, (table) => {
    return {
      pk: primaryKey({ columns: [table.settingId, table.userId]}),
    };
});