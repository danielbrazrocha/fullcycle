# Desafio Nginx + Node.js + MySQL - Full Cycle

Este desafio consiste em utilizar o **Nginx como proxy reverso** para uma aplicação **Node.js**, que se conecta a um banco de dados **MySQL** e retorna uma lista de nomes cadastrados.

## 📌 Objetivo

Ao acessar `http://localhost:8080`, o Nginx deve redirecionar a requisição para o servidor Node.js, que:

1. Conecta ao banco de dados MySQL;
2. Insere um novo nome na tabela `people`;
3. Retorna um HTML contendo:

```html
<h1>Full Cycle Rocks!</h1>
<ul>
  <li>User-809</li>
  <li>User-441</li>
  <li>User-909</li>
</ul>
```

## 🧱 Estrutura do Projeto
```pgsql
.
├── app               # Aplicação Node.js
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── nginx             # Configuração do Nginx
│   └── default.conf
├── docker-compose.yml
└── README.md
```

## 🚀 Como executar

1) clone o repositório:

```bash
git clone https://github.com/seu-usuario/desafio-nginx-node.git
cd desafio-nginx-node
```
2) Suba os containers com o Docker Compose:

```bash
docker-compose up -d
```
3) Acesse a aplicação em seu navegador:

```
http://localhost:8080
```

4) Para parar os containers, execute:
```bash
docker-compose down
```

## 🐳 Tecnologias
Node.js
Express
MySQL
Nginx
Docker
Docker Compose

## 💻 Volume de Desenvolvimento

A aplicação Node.js está montada com volume local para facilitar o desenvolvimento:
```yaml
volumes:
  - ./app:/usr/src/app
  - /usr/src/app/node_modules
```
Isso permite edição dos arquivos da aplicação sem necessidade de rebuild da imagem.
