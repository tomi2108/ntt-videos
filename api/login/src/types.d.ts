export type User = { email: string, password: string };
export type unknownUser = { [K in keyof User]: unknown };
export type decodedToken = { token: string, valid: boolean };
export type unknownToken = { [K in keyof decodedToken]: unknown };