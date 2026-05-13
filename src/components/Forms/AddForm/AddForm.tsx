import React, { use, useReducer } from "react";
import styles from "./AddForm.module.scss";
import Button from "../../Button/Button";
import type { User } from "../../../types";
import type { Action, AddFormProps } from "./AddForm.types";
import adminServices from "../../../services/admin.services";

const reducer = (state: User, action: Action): User => {
    switch (action.type) {
        case "SET_FIELD":
            return { ...state, [action.field]: action.value }
        default:
            return state
    }
}
const AddForm = ({ toCloseAddModal, toSetUsersFn }: AddFormProps) => {
    const [formData, updateForm] = useReducer(reducer, {
        name: "",
        bill_type: "normal",
        email: ""
    })

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        await adminServices.postUser(formData);        
        const users = await adminServices.getUsers();
        // console.log(users);
        toSetUsersFn(users!);
        toCloseAddModal();
    };
    return (
        <form className={[styles.AddForm, styles.Form].join(" ")} onSubmit={handleSubmit}>
            <span>Add User</span>
            <input type="text" name="name" id="" placeholder="Enter your name" value={formData.name} onChange={e => updateForm({ type: "SET_FIELD", value: e.target.value, field: "name" })} required />
            <select name="bill_type" value={formData.bill_type} onChange={e => updateForm({ type: "SET_FIELD", value: e.target.value, field: "bill_type" })} required>
                <option value="">Select Type</option>
                <option value="normal">Normal</option>
                <option value="industry">Industry</option>
                <option value="solar">Solar</option>
            </select>
            <input type="email" name="email" id="" placeholder="Enter your email" value={formData.email} onChange={e => updateForm({ type: "SET_FIELD", value: e.target.value, field: "email" })} required />
            <Button type="submit">Save</Button>
            <Button type="reset">Reset</Button>
            <Button onClick={() => toCloseAddModal()} type="button">Cancel</Button>
        </form>
    )
}

export default AddForm;

