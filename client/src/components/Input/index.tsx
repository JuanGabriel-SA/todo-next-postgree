import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export default function Input({ className = "", error, ...props }: InputProps) {
  return (
    <input
      className={`${styles.input} ${className} ${
        error
          ? "border-1 border-solid border-red-800 bg-red-100"
          : "bg-gray-100 border-1 border-solid border-gray-300"
      }`}
      {...props}
    />
  );
}
