export type VideoVisibility = "public" | "private";
export type decodedToken = { token: string, valid: boolean };
export type unknownToken = { [K in keyof decodedToken]: unknown };