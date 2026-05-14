import type { User } from "./types";

export type Type = "SET_IS_ADMIN" | "SET_IS_CUSTOMERSUPPORT";

export interface AppAction {
    type: Type
}

export type SystemUser = { username: string, role: "admin" | "customer_support" }

export interface LoginState {
    isAuthenticated: boolean,
    user? : SystemUser | null
}

export type LoginAction =
{
    type: "LOGIN_SUCCESS",
    user: SystemUser
} |
{
    type: "LOGOUT"
}