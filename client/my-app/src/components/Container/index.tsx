import { HTMLAttributes } from "react";
import styles from "./Container.module.css";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <section className={`${styles.container} ${className}`} {...props}>
      {" "}
      {children}{" "}
    </section>
  );
}
