# 7Health (Seven Health) 🌱

O **7Health** é um aplicativo de delivery fitness desenvolvido para pessoas que buscam manter uma alimentação saudável e equilibrada no dia a dia. A plataforma funciona como um elo entre o usuário e opções nutritivas, facilitando a escolha de refeições saudáveis mesmo em rotinas corridas.

---

## 📋 Sobre o Projeto



<div align="center">
	<img src="https://ik.imagekit.io/Outwake/image.webp" title="source: imgur.com" width="50%"/>
</div>

Este projeto foi desenvolvido como parte do **Desafio 02 - Projeto Integrador** para a **Generation Brasil**. O objetivo central é ser um aliado na saúde do usuário, oferecendo pratos pensados para quem pratica atividades físicas ou deseja melhorar seus hábitos alimentares através de uma interface simples e intuitiva.

### Principais Objetivos:
* Conectar usuários a opções de comidas fitness e saudáveis.
* Facilitar a escolha de refeições que equilibram sabor, praticidade e valor nutricional.
* Proporcionar uma plataforma prática para quem busca melhorar a alimentação.

---

## 🛠️ Tecnologias Utilizadas

A stack tecnológica do projeto foca em robustez e escalabilidade para o desenvolvimento backend:

| Item | Tecnologia |
| :--- | :--- |
| **Linguagem** | TypeScript |
| **Framework** | Nest.js |
| **ORM** | TypeORM |
| **Banco de Dados** | MySQL (db_7health) |
| **Testes de API** | Insomnia |

---

## 🗄️ Estrutura de Dados

O banco de dados foi estruturado para gerenciar o fluxo de pedidos de forma eficiente.



### Tabelas Principais:

* **tb_usuario:** Gerencia informações de cadastro (nome, email, senha, foto) e controle de data de criação da conta e data de nascimento.

* **tb_produtos:** Contém o catálogo de itens fitness, incluindo descrição, preço e valor calórico.

* **tb_categoria:** Contém o tipo e a descrição da categoria do produto.

  <div align="center">
  	<img src="https://ik.imagekit.io/Outwake/DER%207HEALTH.png" title="source: imgur.com" width="100%"/>
  </div>

---



## ⚙️ Arquitetura do Projeto

Estrutura organizada para facilitar **manutenção, escalabilidade e leitura técnica**:

```text
📦 7HEALTH
 ┣ 📂 src
 ┃ ┣ 📂 categoria         # Entidade Categoria.
 ┃ ┣ 📂 produto           # Entidade Produto.
 ┃ ┣ 📂 usuario           # Entidade Usuário.
 ┃ ┣ 📜app.module.ts      # Arquivo principal que configura os módulos do aplicativo.
 ┃ ┣ 📜app.service.ts     # Contém a lógica de negócios da aplicação.
 ┃ ┣ 📜app.controller.ts  # Controla requisições e respostas da API.
 ┃ ┗ 📜main.ts            # Inicializa e executa a aplicação NestJS.
 ┣ 📂 util                # Utilidades e helpers.
 ┣ 📂 test                # Contém testes automatizados da aplicação.
 ┣ 📜 package.json        # Lista dependências e configurações do projeto.
 ┗ 📜 tsconfig.json       # Configura como o TypeScript compila código.
```

<br />



## 🚀 Implementações Futuras

O roteiro de evolução do 7Health prevê as seguintes funcionalidades:
* **Logística:** Opções de entrega a domicílio ou retirada física na loja.
* **Feedback:** Sistema de avaliações de refeições e estabelecimentos pelos usuários.
* **UX/UI:** Filtros de busca avançados e acompanhamento do status do pedido em tempo real.
* **Histórico:** Visualização de pedidos anteriores pelo usuário.
* **Financeiro:** Integração de métodos de pagamentos digitais nativos.
* **Conectividade:** Integração com o ecossistema do aplicativo **7Fit**.

---

## 👥 Equipe (Grupo 05)

* Ana Beatriz Carvalho
* Daniella Camillo
* João Pedro
* Júlia Lima
* Larissa Mendonça
* Lucas Ribeiro
* Matheus Tiago Canellas