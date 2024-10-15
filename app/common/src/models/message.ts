import { message } from "@database/schema/message";


//Hier Zieht er sich das Message Modell aus der message Schema datei.
export type MessageModel = typeof message.$inferInsert;