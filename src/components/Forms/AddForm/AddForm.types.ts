export type Type = 
"SET_NAME" |
"SET_TYPE" |
"SET_EMAIL"

export interface AddFormActions {
    type: Type,
    data: string
}


export interface AddFormProps {
    toCloseAddModal: () => void
}