import axios from "axios"
import type { User } from "../types";

interface AuthResponse {
    accessToken: string;
    status: number,
    data: any,
    err: any
}

const axiosLoginInstance = axios.create({
    baseURL: "https://mbcgb624-8000.inc1.devtunnels.ms",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 5000
})
const authLogin = async (user: {username: string, password: string}) => {
    try {
        const response: AuthResponse = await axiosLoginInstance.post("/login");
        if (response.status === 200) {
            const token = response.accessToken;
            if (token) {
                localStorage.setItem("token", token);
            }
            console.log("success: ", response.data);
        }
    } catch (e) {
        console.log("err in authLogin", e)
    }
}

export default {
    authLogin
}