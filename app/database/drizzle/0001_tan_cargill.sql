CREATE TABLE `channel` (
	`channelId` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `message` (
	`messageId` text PRIMARY KEY NOT NULL,
	`channelId` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`value` text NOT NULL,
	FOREIGN KEY (`channelId`) REFERENCES `channel`(`channelId`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `message_messageId_unique` ON `message` (`messageId`);--> statement-breakpoint
CREATE TABLE `settings` (
	`settingId` text NOT NULL,
	`value` text,
	`userId` integer NOT NULL,
	PRIMARY KEY(`settingId`, `userId`),
	FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `users` ADD `password` text NOT NULL;