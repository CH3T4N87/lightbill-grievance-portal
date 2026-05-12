import styles from "./Modal.module.scss";
import type { ModalProps } from "./Modal.types";
const Modal = ({children}: ModalProps) => {
  return (
    <div className={styles.modalBackDrop}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  )
}

export default Modal