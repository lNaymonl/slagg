import { jwtDecode } from "jwt-decode";

import type { LoginUserModel, UserModel } from "@common/models/user";
import { CoockieLib } from "./cookie.lib";
import HttpClient from "./httpClient.lib";
import { HttpResponseModel, type JwtResponseModel } from "@common/models/response";

class User {
    private static readonly COOKIE_KEY = "BearerToken";
    
    private static SetToken(bearerToken: string): void {
        CoockieLib.setCookie({ key: this.COOKIE_KEY, value: bearerToken });
    }
    
    public static getToken(): string | null {
        return CoockieLib.getCookie(this.COOKIE_KEY)?.value ?? null;
    }

    public static getUser(): UserModel | null {
        const token = this.getToken();
        if (!token || token.length == 0) return null;

        let jwtToken;
        try {
            jwtToken = jwtDecode<UserModel>(token);
        } catch (error) {
            console.error(error);
            return null;
        }
        
        return jwtToken;
    }

    public static async login(user: LoginUserModel): Promise<string | null> {
        const token = this.getToken();
        if (token) {
            // TODO show a proper error
            console.error("There is already a user logged in!");
            return token;
        }

        let response;
        try {
            response = await HttpClient.apiReq<JwtResponseModel, LoginUserModel>("/api/user/login", "POST", { body: user, showOnError: true });

            console.log(response);

            if (!response) return null;
        } catch {
            return null;
        };

        const newToken = response.bearerToken;
        this.SetToken(newToken);

        return newToken;
    }

    public static async logout(): Promise<void> {
        const token = this.getToken();
        if (!token) {
            console.error("There is no user logged in!");
            return;
        }

        try {
            await HttpClient.apiReq("/api/user/logout", "POST");
        } catch {
            // The error handling is done by the `HttpClient`-Lib
        }
    }
};

export default User;
