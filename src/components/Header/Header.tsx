import Button from "../Button/Button";
import styles from "./Header.module.scss";
import type { HeaderProps } from "./Header.types";
const Header = ({onAddButton}: HeaderProps) => {
    const handleAddClick = () => {
        onAddButton();
    }
  return (
    <header className={styles.Header}>
        <span>AdminPanel</span>
        <Button onClick={handleAddClick}>Add</Button>
    </header>
  )
}

export default Header