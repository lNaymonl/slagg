import { HttpResponseModel } from "@common/models/response";
import User from "./user.lib";

class HttpClient {
    public static async apiReq<R, RequestBody = null>(path: string, method: HttpMethod, options?: HttpOptions<RequestBody>): Promise<R | null> {
        let response: R | HttpResponseModel;
        try {
            let actualPath: string;
            if (path.startsWith("/api")) actualPath = path;
            else if (path.startsWith("api")) actualPath = "/" + path;
            else if (path.startsWith("/")) actualPath = "/api" + path;
            else actualPath = "/api/" + path;

            // console.log(options?.body)
            
            response = (await (await fetch(actualPath, {
                ...options,
                body: JSON.stringify(options?.body),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    ...(options?.headers ?? {}),
                    Authorization: User.getToken() ? `Bearer ${User.getToken()}` : "",
                },
                method
            })).json()) as R | HttpResponseModel;

            // TODO somehow fix the error handling and stuff or something. Maybe change every single fucking request to the fucking HttpResponse and add a data property to that type.
            if (!(response as HttpResponseModel).ok) {
              return Promise.reject(null);
            }

            // console.log(response);
        } catch (error) {
            console.error(error);
            // const errorResponse = error as HttpResponseModel;

            // TODO show the error as a dom element if `showOnError` is `true`s
            // console.error(errorResponse);

            // return Promise.reject(errorResponse);
            return Promise.reject(null);
        }

        return response as R;
    }
};

export type HttpOptions<T> = 
    // Omit<> removes the given properties from the given type
    Omit<RequestInit, 'method' | "body"> & { // Expand the default model by the following properties
        showOnError?: boolean;
        body: T
    };
export type HttpMethod = "POST" | "PUT" | "DELETE" | "GET";

export default HttpClient;
