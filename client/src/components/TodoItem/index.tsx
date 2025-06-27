"use client";

import Checkbox from "../Checkbox";
import { X } from "lucide-react";
import styles from "./ToDoItem.module.css";
import { removeTodo, toggleTodo } from "@/services/todoService";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { removeTodoOnState, toggleTodoOnState } from "@/slices/todoSlice";
import { motion, Transition } from "motion/react";

interface ToDoItemProps {
  title: string;
  completed: boolean;
  id: number;
}

const todoItemVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const todoItemTransition: Transition = {
  type: "tween",
  ease: [0.6, 0.05, 0.28, 0.91],
  duration: 0.2,
};

export default function ToDoItem({ title, completed, id }: ToDoItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleCheck = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const response = await toggleTodo({ completed: isChecked, id: id });
    const updatedTodo = response.data;

    dispatch(toggleTodoOnState(updatedTodo.id));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleRemove = async (_event: React.MouseEvent<HTMLButtonElement>) => {
    const response = await removeTodo(id);
    const deletedTodo = response.data;

    dispatch(removeTodoOnState(deletedTodo.id));
  };

  return (
    <motion.div
      layout
      variants={todoItemVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={todoItemTransition}
      className={`${styles.container} ${
        completed ? "bg-green-100 border-green-600" : "border-gray-400"
      }`}
    >
      <Checkbox onChange={handleCheck} checked={completed} />
      <p
        className={`${styles.title} ${
          completed ? "line-through text-gray-500" : ""
        }`}
      >
        {title}
      </p>
      <button className={styles.removeBtn} onClick={handleRemove} type="button">
        <span>
          <X size={15} />
        </span>
      </button>
    </motion.div>
  );
}
