import { useReducer, type HTMLAttributes } from "react";
import Button from "../../Button/Button";
import styles from "./TableBody.module.scss";
import type { TableBodyProps } from "./TableBody.types";



const Table = ({ children, className, ...props }: HTMLAttributes<HTMLTableElement>) => {
  return (
    <table {...props} className={[styles.Table, className].join(" ")}>{children}</table>
  )
}

const ExtraGenericTable = <T extends {}>({columns, data}: { columns: { display: string, key: keyof T }[], data: T[] }) => {
  return (
    <table>
      <thead>
        <tr>
          {
            columns.map((c) => {
              return (
                <th key={c.key.toString()} >{c.display}</th>
              )
            })
          }
        </tr>
      </thead>

      <tbody>
        {
          data.map(row => {
            return (
              <tr>
                {
                  columns.map(c => {
                    return (
                      <td>{`${row[c.key]}`}</td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

const Usage = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Column 1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </Table>
  )
}


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
        data.map((u) => <tr key={u.user_id}>
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