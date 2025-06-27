import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children }: ButtonProps) {
  return <button className={styles.button}>{children}</button>;
}
