import styles from "./TableHead.module.scss";
import type { TableHeadProps } from './TableHead.types'

const TableHead = ({ heads }: TableHeadProps) => {
    return (
        <thead className={styles.thead}>
            <tr>
                {
                    heads.map((h, i) => <th key={i}>{h}</th>)
                }
            </tr>
        </thead>
    )
}

export default TableHead;