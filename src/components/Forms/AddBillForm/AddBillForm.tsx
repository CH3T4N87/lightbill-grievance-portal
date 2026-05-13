import { useReducer } from "react";
import type { Bill } from "../../../types";
import type { Action, AddBillFormProps } from "./AddBillForm.types";
import Button from "../../Button/Button";
import styles from "./AddBillForm.module.scss";
import adminServices from "../../../services/admin.services";

const reducer = (state: Bill, action: Action): Bill => {
    switch (action.type) {
        case "SET_FIELD":
            return { ...state, [action.field]: action.value }
        default:
            return state
    }
}


const AddBillForm = ({ toCloseAddBill }: AddBillFormProps) => {
    const [formData, updateForm] = useReducer(reducer, {
        user_id: localStorage.getItem("selectedUser")!,
        units: 0,
        total: 0,
        photos: ""
    })

    const { units, total, photos } = formData;

    const onAddBillSubmit =async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        const response = await adminServices.postBill(formData);
        toCloseAddBill();
    }

    return (
        <form onSubmit={onAddBillSubmit} className={styles.Form}>
            <span>Add Bill</span>
            <input type="text" placeholder="Units" value={units} name="units" onChange={e => updateForm({ type: "SET_FIELD", field: "units", value: e.target.value })} />
            <input
                type="text"
                placeholder="Image link here"
                value={photos}
                name="photos"
                onChange={e => updateForm({ type: "SET_FIELD", field: "photos", value: e.target.value })} />
            <input
                type="text"
                placeholder="Total"
                value={total}
                name="total"
                onChange={e => updateForm({ type: "SET_FIELD", field: "total", value: e.target.value })}
            />

            <Button type="submit">Add</Button>
            <Button type="reset">Reset</Button>
            <Button type="button" onClick={() => toCloseAddBill()}>Cancel</Button>
        </form>
    )
}

export default AddBillForm