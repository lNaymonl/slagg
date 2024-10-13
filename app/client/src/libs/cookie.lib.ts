export class CoockieLib {
    public static getCookies(): Cookie[] {
        // The cookies are returned in the following format: `key1=value1; key2=value2`
        // So they have to be split before they can be worked with
        return document.cookie.split(";").map((value) => {
            const valueArr = value.trim().split("=");
            return {
                key: valueArr[0],
                value: valueArr[1]
            };
        })
    }

    public static getCookie(key: string): Cookie | undefined {
        return this.getCookies().find((cookie) => cookie.key == key);
    }

    public static setCookie(cookie: Cookie): void {
        document.cookie = `${cookie.key}=${cookie.value}`;
    }
    public static setCookies(cookies: Cookie[]): void {
        cookies.forEach(cookie => {
            this.setCookie(cookie);
        });
    }
}

export interface Cookie {
    key: string;
    value: string;
};
