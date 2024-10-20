import { Router } from 'express';
import { drizzle } from 'drizzle-orm/connect';
import { usersTable } from '@database/schema/user';

const postuserRouter = Router();

postuserRouter.post("/", async (req, res) => {
    const userData = req.body;

    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
        return res.status(400).send({ message: "Missing required fields" });
    }

    try {
        const db = await drizzle("libsql", process.env["DB_FILE_NAME"]!);
        const user = await db.insert(usersTable).values({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            userName: userData.userName ?? null,
            password: userData.password
        });

        res.status(201).send({ message: "User created successfully", user });
    } catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).send({ message: "Internal server error" });
    }
});

export default postuserRouter;