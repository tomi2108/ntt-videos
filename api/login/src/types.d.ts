export type User = { email: string, password: string };
export type UnknownUser = { [K in keyof User]: unknown };
export type DecodedToken = { token: string, valid: boolean };
export type UnknownToken = { [K in keyof DecodedToken]: unknown };