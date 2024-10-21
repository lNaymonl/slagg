import { channel } from "@database/schema/channel";

//Hier Zieht er sich das Channel Modell aus der channel Schema datei.
export type ChannelModel = typeof channel.$inferSelect;

export type AddChannelModel = typeof channel.$inferInsert;