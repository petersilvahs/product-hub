# 🛍️ Product Hub - Backend

Este é o backend da aplicação **Product Hub**, uma **API RESTful** desenvolvida em **.NET 8** com **Entity Framework Core** e **Autenticação JWT**.

## 🚀 Tecnologias

- .NET 8  
- Entity Framework Core  
- SQL Server  
- Autenticação JWT  
- Swagger (Swashbuckle.AspNetCore)  

## 📦 Como Rodar o Projeto  

### 🔹 Pré-requisitos  
Antes de começar, você precisa ter instalado:  

- **.NET SDK 8**  
- **SQL Server**  
- **Insomnia/Postman** (Opcional, para testar a API)  

### 🔹 Clonando o Repositório  

```makefile
git clone https://github.com/seu-usuario/product-hub.git
cd product-hub 
```

### 🔹 Configurando a Conexão com o Banco de Dados

Abra o arquivo appsettings.json e configure a DefaultConnection com os dados do SQL Server:
```makefile
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=ProductHub;User Id=sa;Password=SuaSenha;TrustServerCertificate=True;"
}
```

### 🔹 Rodando as Migrações do Banco de Dados
Execute os comandos abaixo para criar o banco de dados:
```makefile
dotnet ef database update
```

### 🔹 Executando o Projeto
Agora, basta rodar o servidor:
```makefile
dotnet run
```
- A API estará disponível em http://localhost:5023

### 📖 Documentação da API
Para acessar a documentação via Swagger, inicie o projeto e acesse:

🔗 http://localhost:5023/swagger

