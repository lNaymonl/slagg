import { usersTable } from "@database/schema/user";


//Hier zieht er sich das User Modell aus der Schema user Datei.
export type UserModel = typeof usersTable.$inferInsert;

// Omit 'userId' bewirkt, dass alles aus die userId von UserModel auf AddUserModel vererbt wird.
export type AddUserModel = Omit<UserModel, 'userId'>

//Pick 'email' | 'password' bewirkt das email und password von UserModel auf LoginUserModel vererbt werden.
export type LoginUserModel = Pick<UserModel, 'email' | 'password'>;

export interface ChangePasswordModel extends Pick<UserModel, 'userId' | 'password'> {
    newPassword: string;
}

export interface ChangePassword extends Pick<UserModel, 'userId'> {
    settingId: string;
    value: any;
}
