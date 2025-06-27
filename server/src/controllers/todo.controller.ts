import { Request, Response } from "express";
import db from "../../prisma/db";

export const addTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    if (!title) {
      res.status(400).json({ message: "Nenhum título fornecido." });
      return;
    }

    const todo = await db.todo.create({
      data: {
        title,
      },
    });

    res.status(201).json({ message: "Item criado com sucesso.", data: todo });
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao adicionar item.", error: error.message });
    return;
  }
};

export const toggleTodo = async (req: Request, res: Response) => {
  try {
    const { completed, id } = req.body;

    const updatedTodo = await db.todo.update({
      where: {
        id,
      },
      data: {
        completed,
      },
    });

    res
      .status(200)
      .json({ message: "Item atualizado com sucesso.", data: updatedTodo });
    return;
  } catch (error: any) {
    res.status(500).json({
      message: "Erro ao marcar ou desmarcar item.",
      error: error.message,
    });
    return;
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedTodo = await db.todo.delete({
      where: {
        id: parseInt(id),
      },
    });

    res
      .status(200)
      .json({ message: "Item removido com sucesso.", data: deletedTodo });
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao remover item.", error: error.message });
    return;
  }
};

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await db.todo.findMany();
    res
      .status(200)
      .json({ message: "Itens retornados com sucesso.", data: todos });
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Erro ao buscar itens.", error: error.message });
    return;
  }
};
