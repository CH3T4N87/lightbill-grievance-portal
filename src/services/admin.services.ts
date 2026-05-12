export type Type = "normal" | "industry" | "solar";
export interface User {
    id?: number
    name: string,
    bill_type: Type,
    email: string
}

const baseUrl = "https://mbcgb624-8000.inc1.devtunnels.ms/"; 
const getIssues = async () => {
    const response = await fetch(`${baseUrl}`);
    console.log(response)
    const data = await response.json();
    console.log(data);
}
const postUser = async (newUser: User) => {
    try {
        const response = await fetch(`${baseUrl}`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        if (response.status === 201) {
            alert("User Has been Registered Successfully");
        }
    } catch (e) {
        console.warn(e);
    }
}

export default {
    getIssues,
    postUser
}