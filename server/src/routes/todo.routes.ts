import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  toggleTodo,
} from "../controllers/todo.controller";

const router = Router();

router.post("", addTodo);
router.get("", getTodos);
router.delete("/:id", deleteTodo);
router.put("", toggleTodo);

export default router;
