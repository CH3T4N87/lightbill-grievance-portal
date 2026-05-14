import { useReducer, type ChangeEvent, type SyntheticEvent } from "react";
import Button from "../Button/Button";
import styles from "./LoginPage.module.scss";
import type { Action, LoginDetails, LoginPageProps } from "./LoginPage.types";
import authServices from "../../services/auth.services";

const loginReducer = (state: LoginDetails, action: Action) => {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state, [action.field]: action.value
            }
        default:
            return state;
    }
}

const LoginPage = ({ loginDispatch }: LoginPageProps) => {
    const [credentials, updateCredentials] = useReducer(loginReducer, { username: "", password: "" });
    const { username, password } = credentials;

    const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(credentials);
        // const response = await authServices.authLogin(credentials);
        // console.log("Response: ", response);
        

        //if login successful
        loginDispatch({
            type: "LOGIN_SUCCESS",
            user: { username: "defaultuser", role: "admin" }
        })
    }
    return (
        <form className={styles.LoginForm} onSubmit={handleLogin} >
            <input type="text" placeholder="username" name="username" value={username} onChange={(e: ChangeEvent<HTMLInputElement>) => updateCredentials({ type: "SET_FIELD", field: "username", value: e.target.value })} required />
            <input type="password" placeholder="Password" name="password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => updateCredentials({ type: "SET_FIELD", field: "password", value: e.target.value })} required />
            <Button>Login</Button>
        </form>
    )
}

export default LoginPage