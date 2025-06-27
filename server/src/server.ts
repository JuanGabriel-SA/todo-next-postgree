import express from "express";
import todoRoutes from "./routes/todo.routes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.FRONT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/todo", todoRoutes);

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
