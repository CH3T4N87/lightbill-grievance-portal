export interface User {
    id?: number
    name: string,
    type: Type,
    email: string
}

export type Type = "normal" | "industry" | "solar";
