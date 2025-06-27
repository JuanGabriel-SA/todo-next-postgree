import { HTMLAttributes } from "react";
import styles from "./Main.module.css";
import Wave from "../Wave";

type MainProps = HTMLAttributes<HTMLDivElement>;

export default function Main({
  children,
  className = "",
  ...props
}: MainProps) {
  return (
    <main className={`${styles.main} ${className}`} {...props}>
      {children}
      <Wave />
    </main>
  );
}
