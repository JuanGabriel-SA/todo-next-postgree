"use client";

import { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./ToDoForm.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { addTodo } from "@/services/todoService";
import { addTodoOnState } from "@/slices/todoSlice";
import { toast } from "react-toastify";

export default function ToDoForm() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (todoTitle !== "")
      try {
        const response = await addTodo({ title: todoTitle });
        const newTodo = response.data;
        dispatch(addTodoOnState(newTodo));
        setTodoTitle("");
        toast.success("Tarefa adicionada com sucesso!");
      } catch (error: unknown) {
        console.log("Erro ao adicionar item: ", error);
      }
    else {
      toast.error("Digite um nome para a tarefa!");
      setError(true);
    }
  };

  useEffect(() => {
    setError(false);
  }, [todoTitle]);

  return (
    <form className="w-full flex" onSubmit={handleSubmit}>
      <Input
        maxLength={80}
        error={error}
        onChange={(e) => setTodoTitle(e.target.value)}
        value={todoTitle}
        className={styles.input}
        placeholder="Adicione sua tarefa aqui"
      />
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
