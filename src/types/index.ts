export type Type = "normal" | "industry" | "solar";

export interface User {
    user_id?: string,
    name: string,
    bill_type: Type,
    email: string
}

export interface Bill {
    bill_id?: string,
    user_id?: string,
    units: number,
    photos: string,
    total: number
}

