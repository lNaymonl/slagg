import { usersTable } from "@database/schema/user";

// Hier zieht er sich das User Modell aus der Schema user Datei.
export type UserModel = typeof usersTable.$inferSelect;

export type AddUserModel = typeof usersTable.$inferInsert;

// Pick 'email' | 'password' bewirkt das email und password von UserModel auf LoginUserModel vererbt werden.
export type LoginUserModel = Pick<UserModel, 'email' | 'password'>;

export interface ChangePasswordModel extends Pick<UserModel, 'userId' | 'password'> {
    newPassword: string;
}

export interface JwtUserModel extends Omit<UserModel, "password"> {
    exp: Date;
}
