import { Router } from 'express';
import { drizzle } from 'drizzle-orm/connect';
import { settingsTable } from '@database/schema/settings';

const postsettingsRouter = Router();

postsettingsRouter.post("/", async (req, res) => {
    const settingsData = req.body;

    if (!settingsData.settingId || !settingsData.settingName || !settingsData.settingInputType || !settingsData.value || !settingsData.userId) {
        return res.status(400).send({ message: "Missing required fields" });
    }

    try {
        const db = await drizzle("libsql", process.env["DB_FILE_NAME"]!);
        const postsetting = await db.insert(settingsTable).values({
            settingId: settingsData.settingId,
            settingName: settingsData.settingName,
            settingInputType: settingsData.settingInputType,
            value: settingsData.value,
            userId: settingsData.userId,
        });

        res.status(201).send({ message: "Setting saved successfully", postsetting });
    } catch (error) {
        console.error("Error inserting setting:", error);
        res.status(500).send({ message: "Internal server error" });
    }
});

export default postsettingsRouter;