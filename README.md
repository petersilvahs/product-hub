# 🛍️ Product Hub

Este é o repositório completo do **Product Hub**, uma aplicação para gerenciamento de produtos, composta por um **frontend em React** e um **backend em .NET 8** com **Entity Framework Core** e **Autenticação JWT**.

## 🚀 Tecnologias

### **Backend**
- .NET 8
- Entity Framework Core
- SQL Server
- Autenticação JWT
- Swagger (Swashbuckle.AspNetCore)

### **Frontend**
- React + Vite
- TypeScript
- Ant Design
- Axios
- React Router

### **Infraestrutura**
- Docker + Docker Compose

## 📦 Como Rodar o Projeto

### 🔹 **Pré-requisitos**
Antes de começar, você precisa ter instalado:

- **.NET SDK 8**
- **Node.js** (recomendado: 18+)
- **Docker e Docker Compose**
- **Insomnia/Postman** (Opcional, para testar a API)

## 🚀 **Rodando com Docker** (Recomendado)

A forma mais rápida de rodar o projeto é via Docker. Basta clonar o repositório e executar:

```sh
git clone https://github.com/seu-usuario/product-hub.git
cd product-hub
docker compose up -d
```

Isso iniciará os serviços do **frontend**, **backend** e **SQL Server**.

### **Acesso aos Serviços**
- **Frontend:** http://localhost:3000  
- **Backend:** http://localhost:5023  
- **Swagger:** http://localhost:5023/swagger  
- **Banco de Dados:** SQL Server rodando na porta `1433`

Para parar os containers, execute:

```sh
docker compose down
```

## ⚙️ **Rodando Manualmente**

Se preferir rodar os serviços sem Docker, siga os passos abaixo:

### 🔹 **Rodando o Backend**

1. **Clone o repositório e vá para o backend:**
   ```sh
   git clone https://github.com/seu-usuario/product-hub.git
   cd product-hub/backend
   ```

2. **Configure a conexão com o banco no `appsettings.json`:**
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=localhost;Database=ProductHub;User Id=sa;Password=SUA_SENHA;TrustServerCertificate=True;"
   }
   ```

3. **Execute as migrações do banco:**
   ```sh
   dotnet ef database update
   ```

4. **Rode o servidor:**
   ```sh
   dotnet run
   ```

   O backend estará disponível em: http://localhost:5023

### 🔹 **Rodando o Frontend**

1. **Vá para a pasta do frontend:**
   ```sh
   cd ../frontend
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Inicie o servidor:**
   ```sh
   npm run dev
   ```

   O frontend estará disponível em: http://localhost:5173

## 📖 **Documentação da API**
A documentação da API pode ser acessada via **Swagger**:

🔗 http://localhost:5023/swagger
