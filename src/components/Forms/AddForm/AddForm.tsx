import { useState } from "react";
import styles from "./AddForm.module.scss";
import adminServices, { type Type, type User } from "../../../services/admin.services";
import Button from "../../Button/Button";
const AddForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [email, setEmailName] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newUser: User = {
            name,
            bill_type: type as Type,
            email
        };
        // const response = await adminServices.postUser(newUser);
        // console.log(response);
        await adminServices.getIssues();
    }
  return (
    <form className={[styles.AddForm, styles.Form].join(" ")} onSubmit={handleSubmit}>
        <span>Add User</span>
        <input type="text" name="name" id="" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required/>
        <select name="bill_type" value={type} onChange={e => setType(e.target.value)} required>
            <option value="">Select Type</option>
            <option value="normal">Normal</option>
            <option value="industry">Industry</option>
            <option value="solar">Solar</option>
        </select>
        <input type="email" name="email" id="" placeholder="Enter your email" value={email} onChange={e => setEmailName(e.target.value)} required/>
        <Button>Save</Button>
    </form>
  )
}

export default AddForm;

