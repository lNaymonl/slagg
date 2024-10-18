export interface LoginUserModel {
    email: string;
    password: string
}

export interface UserModel {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    userName?: string;
}

export interface JwtUserModel extends UserModel {
    exp: Date;
}
