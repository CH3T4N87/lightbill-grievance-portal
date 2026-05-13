export type Type = "SHOW_ADD_MODAL" | "HIDE_ADD_MODAL" ;
export interface AdminPanelActions {
    type: Type
}

export type BillType =  "SHOW_ADD_BILL_MODAL" | "HIDE_ADD_BILL_MODAL"; 
export interface AddBillAction{
    type: BillType
}