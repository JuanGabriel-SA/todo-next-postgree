import Image from "next/image";
import styles from "./Wave.module.css";

export default function Wave() {
  return (
    <Image
      width={3840}
      height={250}
      src="/waves.svg"
      alt="onda animada"
      className={styles.wave}
    />
  );
}
