PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_settings` (
	`settingId` text NOT NULL,
	`settingName` text,
	`settinginputType` text,
	`value` text,
	`userId` integer NOT NULL,
	PRIMARY KEY(`settingId`, `userId`),
	FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_settings`("settingId", "settingName", "settinginputType", "value", "userId") SELECT "settingId", "settingName", "settinginputType", "value", "userId" FROM `settings`;--> statement-breakpoint
DROP TABLE `settings`;--> statement-breakpoint
ALTER TABLE `__new_settings` RENAME TO `settings`;--> statement-breakpoint
PRAGMA foreign_keys=ON;