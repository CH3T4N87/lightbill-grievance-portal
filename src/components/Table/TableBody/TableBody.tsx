import Button from "../../Button/Button";
import styles from "./TableBody.module.scss";

const TableBody = () => {
  return (
    <tbody className={styles.tbody}>
      <tr>
        <td>Chetan Kshirsgar</td>
        <td>Solar</td>
        <td className={styles.imgContainer}>
          photos
        </td>
        <td>799</td>
        <td className={styles.actionBtnContainer}>
          <Button>View</Button>
          <Button>Raise</Button>
        </td>
      </tr>
    </tbody>
  )
}

export default TableBody