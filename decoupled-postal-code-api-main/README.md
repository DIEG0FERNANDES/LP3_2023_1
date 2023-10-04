# decoupled-postal-code-api

## Sumário

- [decoupled-postal-code-api](#decoupled-postal-code-api)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este app consiste em uma aplicação TypeScript que armazena informações sobre CEPs (Código de Endereçamento Postal) e logradouros dos Correios. O app foi desenvolvido utilizando Prisma como ORM para permitir a alternância entre os Sistemas Gerenciadores de Banco de Dados MongoDB e PostgreSQL, permitindo realizar operações de CRUD para gerenciar esses dados. A aplicação foi desenvolvida com foco na simplicidade, utilizando tecnologias como TypeScript e Node.js para facilitar a construção e manutenção do código.

Este foi o sexto repositório de código apresentado no [Curso Superior de TSI](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) do IFMS como requisito para obtenção da nota parcial das atividades da unidade curricular Linguagem de Programação III.

| [&larr; Repositório anterior](https://github.com/mdccg/decoupled-contact-book-api) | [Próximo repositório &rarr;](https://github.com/mdccg/tv-show-api) |
|-|-|

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Virtualização de banco de dados | [Docker](https://www.docker.com/) |
| ORM | [Prisma](https://www.prisma.io/) |
| Banco de dados<sup>1</sup> | [MongoDB](https://www.mongodb.com/) |
| Banco de dados<sup>2</sup> | [PostgreSQL](https://www.postgresql.org/) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- [Docker](https://docs.docker.com/engine/install/).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);

3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Com o Docker instalado, execute o comando abaixo para levantar o _container_ Docker com o respectivo banco de dados virtualizado. Certifique-se de estar no diretório do arquivo `docker-compose.yml`;

```console
$ docker-compose up -d
```

O parâmetro `-d` serve para desocupar o shell de comando logo após a execução do comando. É uma boa convenção, ao encerrar a execução do app, derrubar o _container_ levantado através do comando:

```console
$ docker-compose down
```

Mas, não se preocupe. As tuplas inseridas no banco de dados não serão deletadas com a derrubada do _container_.

5. Agora, para se certificar de que o Prisma está devidamente configurado em sua máquina, execute o seguinte comando:

```console
$ yarn prisma
```

O script `prisma` está programado para criar uma nova migração no diretório [`prisma/migrations`](./prisma/migrations/).

6. Finalmente, execute o seguinte comando para executar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```
