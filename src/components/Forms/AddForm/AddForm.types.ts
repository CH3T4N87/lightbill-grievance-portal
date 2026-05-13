import type { User } from "../../../types"

export type Action = 
{ type: "SET_FIELD", field: "name" | "bill_type" | "email", value: string }


export interface AddFormProps {
    toCloseAddModal: () => void,
    toSetUsersFn: (users: User[]) => void,
}