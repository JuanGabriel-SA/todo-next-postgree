# ✅ To-Do List Fullstack

Projeto simples de lista de tarefas desenvolvido com o objetivo de praticar o desenvolvimento fullstack utilizando **Next.js** no frontend, **Express + Prisma** no backend e **PostgreSQL** como banco de dados.

## 🚀 Tecnologias Utilizadas

### 🖥️ Frontend (`/client`)
- Next.js
- React
- Axios
- Tailwind CSS (opcional)

### 🔙 Backend (`/server`)
- Express
- Prisma ORM
- PostgreSQL
- CORS
- dotenv

## ⚙️ Como Rodar o Projeto Localmente

### ✅ Pré-requisitos

- Node.js
- PostgreSQL
- npm ou yarn

### 🧩 Backend (Express + Prisma)

cd server  
cp .env.example .env

Edite o arquivo `.env` com os dados do seu banco PostgreSQL:

DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome-do-banco

Depois, instale as dependências e rode as migrations:

npm install  
npx prisma migrate dev  
npm run dev

A API estará rodando em: http://localhost:3333

### 🎨 Frontend (Next.js)

cd ../client  
cp .env.local.example .env.local

Edite o arquivo `.env` com a URL da API:

NEXT_PUBLIC_API_URL=http://localhost:3333

Depois, instale as dependências e rode o projeto:

npm install  
npm run dev

A aplicação estará disponível em: http://localhost:3000

## ✅ Funcionalidades

- Criar uma nova tarefa  
- Listar todas as tarefas  
- Marcar tarefa como concluída  
- Deletar tarefa

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o intuito de praticar a criação de uma aplicação fullstack moderna, utilizando tecnologias populares do ecossistema JavaScript. Ele também serve como base para quem está começando a integrar frontend e backend usando ORM e banco relacional.
