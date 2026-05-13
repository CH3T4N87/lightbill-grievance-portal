import type { User } from "../../../types";

export interface TableBodyProps {
    data: User[] | undefined;
    addBillTogglerFn: (() => void)[]
}