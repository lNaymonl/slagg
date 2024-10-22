import { Router } from 'express';
import { drizzle } from 'drizzle-orm/connect';
import { channel } from '@database/schema/channel';

const postchannelRouter = Router();

postchannelRouter.post("/", async (req, res) => {
    const channelData = req.body;

    if (!channelData.channelId || !channelData.name || !channelData.createdAt || !channelData.updatedAt) {
        return res.status(400).send({ message: "Missing required fields" });
    }

    try {
        const db = await drizzle("libsql", process.env["DB_FILE_NAME"]!);
        const postsetting = await db.insert(channel).values({
            channelId: channelData.channelId,
            name: channelData.name,
            createdAt: channelData.createdAt,
            updatedAt: channelData.updatedAt
        });

        res.status(201).send({ message: "Channel created successfully", postsetting });
    } catch (error) {
        console.error("Error creating channel", error);
        res.status(500).send({ message: "Internal server error" });
    }
});

export default postchannelRouter;