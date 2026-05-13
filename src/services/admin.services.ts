import axios, { type AxiosInstance } from "axios";
import type { Bill, User } from "../types";

export type Type = "normal" | "industry" | "solar";


const api: AxiosInstance = axios.create({
    baseURL: "https://mbcgb624-8000.inc1.devtunnels.ms",
    headers: {
        "Content-Type": "application/json"
    },
})


const getUsers = async (): Promise<User[] | undefined> => {
    try{
        const response = await api.get('/get-users');
        return response.data
    }catch(error){
        console.error("Fetching err:", error);
    }
}
const postUser = async (newUser: User) => {
    console.log("newUser :", newUser);
    try {
        const response = await api.post('/add-user', newUser);
        if (response.status === 201) {
            alert("User Has Been Registered Successfully");
        }
    } catch (e) {
        console.warn(e);
    }
}

const postBill = async (newBill: Bill) => {
    try{
        const response = await api.post("/add-bill", newBill);
        if(response.status === 201){
            alert("Bill added successfully !!");
        }
    }catch(e){
        console.warn(e);
    }
}

export default {
    getUsers,
    postUser,
    postBill
}