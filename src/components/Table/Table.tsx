import styles from "./Table.module.scss";
import type { TableProps } from "./Table.types";
import TableBody from "./TableBody/TableBody";
import TableHead from "./TableHead/TableHead";

const Table = ({ tableHeads, tableBody, addBillTogglerFn }: TableProps) => {
  return (
    <table className={styles.table}>
      <TableHead heads={tableHeads}/>
      <TableBody data={tableBody} addBillTogglerFn={addBillTogglerFn}/>
    </table>
  )
}

export default Table