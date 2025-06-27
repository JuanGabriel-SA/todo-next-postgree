import api from "@/lib/api";

export async function addTodo(data: { title: string }) {
  try {
    const res = await api.post("/todo", data);
    return res.data;
  } catch (error: unknown) {
    console.error("Erro ao adicionar item: ", error);
  }
}

export async function toggleTodo(data: { id: number; completed: boolean }) {
  try {
    const res = await api.put("/todo", data);
    return res.data;
  } catch (error: unknown) {
    console.error("Erro ao marcar item: ", error);
  }
}

export async function getTodos() {
  try {
    const response = await api.get("/todo");
    return response.data;
  } catch (error: unknown) {
    console.error("Erro ao retornar itens: ", error);
  }
}

export async function removeTodo(id: number) {
  try {
    const response = await api.delete(`/todo/${id}`);
    return response.data;
  } catch (error: unknown) {
    console.error("Erro ao remover item: ", error);
  }
}
