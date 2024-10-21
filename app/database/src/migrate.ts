import { drizzle, migrate } from "drizzle-orm/connect";

import path from "path";

export async function migrateDatabase(): Promise<void> {
    const db = await drizzle("libsql", process.env["DB_FILE_NAME"]!);

    try {
        await migrate(db, {
            migrationsFolder: path.join(__dirname, "./drizzle")
        });
        console.log(`Database Migration to ${process.env["DB_FILE_NAME"]!} was successful!`);
    } catch (error) {
        return Promise.reject(error);
    }
}
