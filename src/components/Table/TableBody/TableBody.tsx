import { useReducer } from "react";
import Button from "../../Button/Button";
import styles from "./TableBody.module.scss";
import type { TableBodyProps } from "./TableBody.types";


const TableBody = ({ data, addBillTogglerFn }: TableBodyProps) => {

  const [showAddBillModal, hideAddBillModal] = addBillTogglerFn;
  const onAddBill = (user_id: string) => {
    showAddBillModal();
    localStorage.setItem("selectedUser", user_id);
  }
  if (!data) return <></>
  return (
    <tbody className={styles.tbody}>
      {/* <tr>
        <td>hello</td>
        <td>hello</td>
        <td>hello</td>
        <td className={styles.actionBtnContainer}>
          <Button onClick={() => showAddBillModal()}>Add</Button>
          <Button>Edit</Button>
        </td>
      </tr> */}
      {
        data.map((u, i) => <tr key={i}>
          <td>{u.user_id}</td>
          <td>{u.name}</td>
          <td>{u.bill_type}</td>
          <td className={styles.actionBtnContainer}>
            <Button onClick={() => onAddBill(u.user_id!)}>Add</Button>
            <Button>Edit</Button>
          </td>
        </tr>)
      }
    </tbody>
  )
}

export default TableBody