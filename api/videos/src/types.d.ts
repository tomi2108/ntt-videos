export type VideoVisibility = "public" | "private";
export type DecodedToken = { token: string, valid: boolean };
export type UnknownToken = { [K in keyof decodedToken]: unknown };