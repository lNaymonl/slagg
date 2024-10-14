import { usersTable } from "@database/schema/user";

export type UserModel = typeof usersTable.$inferInsert;

export interface LoginUserModel extends Pick<UserModel, 'email'> {
    email: string;
    password: string;
}
