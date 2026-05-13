import type { User } from "../../types";

export interface TableProps {
    tableHeads: Array<string>,
    tableBody: User[] | undefined,
    addBillTogglerFn: (() => void)[]
}