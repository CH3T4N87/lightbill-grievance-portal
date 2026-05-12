import React, { useReducer, useState } from "react";
import styles from "./AddForm.module.scss";
import Button from "../../Button/Button";
import type { Type, User } from "../../../types";
import type { AddFormActions, AddFormProps } from "./AddForm.types";

const reducer = (state: User, action: AddFormActions): User => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.data }
        case "SET_TYPE":
            return { ...state, type: action.data as Type }
        case "SET_EMAIL":
            return { ...state, email: action.data }
        default:
            return state
    }
}
const AddForm = ({ toCloseAddModal }: AddFormProps) => {
    const [formData, updateForm] = useReducer(reducer, {
        name: "",
        type: "normal",
        email: ""
    })

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <form className={[styles.AddForm, styles.Form].join(" ")} onSubmit={handleSubmit}>
            <span>Add User</span>
            <input type="text" name="name" id="" placeholder="Enter your name" value={formData.name} onChange={e => updateForm({ type: "SET_NAME", data: e.target.value })} required />
            <select name="bill_type" value={formData.type} onChange={e => updateForm({ type: "SET_TYPE", data: e.target.value })} required>
                <option value="">Select Type</option>
                <option value="normal">Normal</option>
                <option value="industry">Industry</option>
                <option value="solar">Solar</option>
            </select>
            <input type="email" name="email" id="" placeholder="Enter your email" value={formData.email} onChange={e => updateForm({ type: "SET_EMAIL", data: e.target.value })} required />
            <Button type="submit">Save</Button>
            <Button type="reset">Reset</Button>
            <Button onClick={() => toCloseAddModal()} type="button">Cancel</Button>
        </form>
    )
}

export default AddForm;

