# News Blog App

O News Blog App é uma aplicação web CRUD de notícias e blogs desenvolvida utilizando Node.js, Express e PostgreSQL.

A aplicação permite realizar cadastro, listagem, edição e exclusão de notícias, simulando um pequeno portal de notícias.

Todo o ambiente foi conteinerizado utilizando Docker e Docker Compose, permitindo que a aplicação e o banco de dados sejam executados em containers separados com comunicação entre si.

---

# Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express
- PostgreSQL
- Docker
- Docker Compose
- EJS
- HTML/CSS

---

# Arquitetura da Aplicação

A aplicação é composta por dois containers principais:

## Aplicação Node.js

Container responsável pelo backend da aplicação, renderização das páginas e gerenciamento das rotas CRUD.

## PostgreSQL

Container responsável pelo armazenamento das informações cadastradas na aplicação.

Os containers se comunicam através da rede criada automaticamente pelo Docker Compose.

---

# Estrutura do Projeto

```txt
projeto/
app/
Dockerfile
docker-compose.yml
README.md
.env
evidencias/
```

---

# Funcionalidades

A aplicação possui CRUD completo de notícias:

- Criar notícia
- Listar notícias
- Editar notícia
- Excluir notícia

As informações são armazenadas em banco PostgreSQL com persistência utilizando Docker Volumes.

---

# Pré-requisitos

Antes de executar o projeto é necessário possuir instalado:

- Docker Desktop
- Docker Compose
- Git

---

# Clonar o Repositório

```bash
git clone [LINK_DO_REPOSITORIO](https://github.com/otavioxz/trabalho-cloud-computing.git)
```

---

# Acessar a Pasta do Projeto

```bash
cd projeto
```

---

# Configuração do Arquivo .env

Antes de executar o projeto, criar um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
DB_HOST=postgres
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=newsdb
DB_PORT=5432
```

Essas variáveis são utilizadas pela aplicação Node.js para realizar conexão com o container PostgreSQL.

---

# Executar a Aplicação

Para iniciar todos os containers da aplicação:

```bash
docker compose up --build
```

Esse comando será responsável por:

- construir a imagem da aplicação;
- iniciar os containers;
- criar a rede Docker;
- conectar aplicação e banco;
- configurar variáveis de ambiente;
- criar o volume de persistência.

---

# Acessar Aplicação

Após iniciar os containers, acessar no navegador:

```txt
http://localhost:3000
```

---

# Containers Utilizados

Container: 
- news_db (Banco PostgreSQL)
- news_app (Aplicação Node.js)

---

# Portas Utilizadas

Serviço:
- Aplicação: porta 3000
- PostgreSQL: porta 5432

---

# Persistência dos Dados

A persistência dos dados foi implementada utilizando Docker Volumes.

Mesmo após reinicializar ou remover os containers, os dados cadastrados permanecem salvos.

---

# Como Testar Persistência

## 1. Cadastrar uma notícia

Acessar a aplicação e cadastrar uma nova notícia.

---

## 2. Parar os containers

```bash
docker compose down
```

---

## 3. Iniciar novamente

```bash
docker compose up
```

---

## 4. Validar persistência

Ao acessar novamente a aplicação, a notícia cadastrada continuará salva no banco de dados.

---

# Docker Compose

O Docker Compose é responsável por:

- iniciar os containers;
- criar rede entre os serviços;
- configurar variáveis de ambiente;
- configurar volumes;
- conectar aplicação e banco PostgreSQL.

---

# Comandos Utilizados

## Construir containers

```bash
docker compose build
```

---

## Iniciar containers

```bash
docker compose up
```

---

## Iniciar em segundo plano

```bash
docker compose up -d
```

---

## Parar containers

```bash
docker compose down
```

---

## Ver containers em execução

```bash
docker ps
```

---

## Ver imagens Docker

```bash
docker images
```

---

## Ver volumes Docker

```bash
docker volume ls
```

---

# DockerHub

Imagem publicada no DockerHub:

```bash
docker pull otavioxz/news-blog-app
```

Para publicar a imagem:

## Login

```bash
docker login
```

---

## Build da imagem

```bash
docker build -t news-blog-app .
```

---

## Tag da imagem

```bash
docker tag news-blog-app otavioxz/news-blog-app
```

---

## Publicar no DockerHub

```bash
docker push otavioxz/news-blog-app
```

---

# Evidências

A pasta `evidencias/` contém imagens comprovando:

- aplicação funcionando;
- docker build;
- docker compose up;
- containers em execução;
- comunicação entre aplicação e banco;
- persistência dos dados;
- volumes Docker;
- publicação da imagem no DockerHub.

---

# Autor

Otavio Rodrigues
