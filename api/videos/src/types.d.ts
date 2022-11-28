export type DecodedToken = { token: string, valid: boolean };
export type UnknownToken = { [K in keyof DecodedToken]: unknown };
export type VideoVisibility = "public" | "private";
export type VideoMetadata = { visibilty: VideoVisibility };