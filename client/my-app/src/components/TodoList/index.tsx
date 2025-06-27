"use client";

import { useEffect } from "react";
import { getTodos } from "@/services/todoService";
import ToDoItem from "../TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setTodos } from "@/slices/todoSlice";
import { AnimatePresence } from "motion/react";
import { PackageOpen } from "lucide-react";
import styles from "./TodoList.module.css";

export default function ToDoList() {
  const dispatch = useDispatch<AppDispatch>();
  const todoState = useSelector((state: RootState) => state.todo.todos);

  async function loadTodos() {
    const response = await getTodos();
    const todos = response.data;
    dispatch(setTodos(todos));
  }

  useEffect(() => {
    loadTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.container} flex flex-col gap-5 w-full`}>
      {todoState.length > 0 ? (
        <AnimatePresence>
          {todoState.map((todo) => (
            <ToDoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </AnimatePresence>
      ) : (
        <span className="mx-auto text-gray-300 flex flex-col">
          <PackageOpen size={60} />
          <p className="mx-auto font-bold">Vazio</p>
        </span>
      )}
    </div>
  );
}
