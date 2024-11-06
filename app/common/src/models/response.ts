export class HttpResponseModel {
    ok!: boolean;
    statusCode!: number;
    message!: string;
};

export interface JwtResponseModel {
    bearerToken: string;
}
