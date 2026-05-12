import styles from "./Button.module.scss";
import type { ButtonProps } from "./Button.types";
const Button = ({children, className, ...props}: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>{children}</button>
  )
}

export default Button