import { InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className={styles.wrapper}>
      <input type="checkbox" className={styles.input} {...props} />
      <span className={styles.box}></span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
