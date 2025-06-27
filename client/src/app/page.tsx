import Container from "@/components/Container";
import Main from "@/components/Main";
import Title from "@/components/Title";
import ToDoForm from "@/components/TodoForm";
import { ScrollText } from "lucide-react";
import ToDoList from "@/components/TodoList";

export default function Home() {
  return (
    <Main>
      <Container>
        <Title className="flex gap-2 text-[1.7rem] font-[600] items-center">
          To-do List
          <span>
            <ScrollText />
          </span>
        </Title>
        <ToDoForm />
        <ToDoList />
      </Container>
    </Main>
  );
}
