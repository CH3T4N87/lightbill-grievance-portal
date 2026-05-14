import type { Dispatch } from "react"
import type { LoginAction } from "../../App.types"

export interface LoginDetails {
    username: string,
    password: string
}

export type Action = 
{type : "SET_FIELD", field: "username" | "password" , value: string }


export interface LoginPageProps {
    loginDispatch: Dispatch<LoginAction>
}