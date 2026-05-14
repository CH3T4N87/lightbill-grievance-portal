export type Action = { type: "SET_FIELD", field: "units" | "photos" | "total", value: number | string };

export interface AddBillFormProps {
    toCloseAddBill: () => void
}