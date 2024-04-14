<h1 align="center"> Application to Manage Notes </h1>

<p align="center">
  <a href="#Introducao"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependencias"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Aplicacao"> 🚀 Aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Licensa"> 📝 License</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<a id="Introducao"></a>
## 🧩 Introdução

### Um Backend completo utilizando Node.js e Express para uma aplicação de gerenciamento de anotações. A API foi construida com o banco de dados <a href="https://www.sqlite.org/">SQLite</a>, e para a manipulação do nosso Banco de Dados foi utilizado a ferramenta <a href="https://www.beekeeperstudio.io/">Beekeeper Studio</a> juntamente com o Query Builder <a href="https://knexjs.org/">Knex.js</a>. Para cadastrar nossas rotas e verificar os status codes das mesmas foi utilizado o <a href="https://insomnia.rest/">Insomnia</a>. 

### A aplicação deve ser capaz de lidar com requisições, feitas pelos clientes, conseguir processar essas requisições e então devolver respostas para quem as solicitou.

### 1. O que é uma API?

API - Application Programming Interface, ou Interface de Programação de Aplicação, é um termo para designar uma interface de comunicação que um sistema oferece para que outros acessem suas funções.

<div align="center">
  <img src="./assets/api-analogia-do-restaurante.png" />
</div

### 2. O que é o Node.js?

Ele é um JS Runtime Enviroment - um ambiente que oferece recursos que permite escrever e executar aplicações JavaScript.

### 3. Onde o Node.js pode ser utilizado?

<div align="center">
  <img src="./assets/onde-o-node-pode-ser-utilizado.png" />
</div>

#### 4. Quais as vantagens?

Temos várias aplicações de ponta usando o Node.js pelos seguintes motivos:

<div align="center">
  <img src="./assets/vantagens-de-usar-node.png" />
</div>

### 5. v8 Engine

O v8 é um interpretador JavaScript. Desenvolvido pelo Google e utilizado em seu navegador Google Chrome. O v8 é desenvolvido em C++ com o objetivo de aumentar a performace de execução do JavaScript.

### 6. O funcionamento do Node.js

<div align="center">
  <img src="./assets/funcionamento-do-node.png" />
</div>

### 7. Express

O Express é um framework web muito rápido e flexível para a gente utilizar nas nossas aplicações Node para lidar com requisições feitas através da web, através do protocolo HTTP, também lidar com requisições, com respostas e por aí vai.

### 8. Métodos HTTP

Para se comunicar com uma API é necessario seguir alguns padrões. É aí que entram os métodos de requisições, também chamados como verbos HTTP, e são esses:

<div align="center">
  <img src="./assets/metodos-http.png" />
</div>

<br />

- GET para dizer ao nosso backend que queremos ler algum tipo de informação;
- POST para realizar a criação de alguma informação na aplicação;
- PUT para atualizar uma informação na aplicação;
- DELETE para deletar, ou seja, excluir uma informação;
- PATCH para fazer uma atualização expecífica de alguma informação.

<a id="Dependencias"></a>
## 🧪 Dependencias
> Requisitos para rotar o código.

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Erros](https://www.npmjs.com/package/express-async-errors)
- [Nodemom](https://nodemon.io/)

<a id="Aplicacao"></a>
## 🚀 Aplicação

### Instalação e inicialização do projeto

### ```COMANDOS```

#### Para instalar as dependências
```
 npm install
```

#### Para rodar o projeto
```
 npm run dev
```

### ```Insomnia```

No Insomnia crie uma 'Request Collection' e a chame de RocketNotes.

Para criar uma requisição, clique no botão com o símbolo de '+' no canto superior a esquerda e escolha a opção 'HTTP Request', depois você pode renomear a requisição para qual ação você for utilizar, como por exemplo: 'User Create', em seguida, troque o método para o tipo da ação que você deseja realizar, como por exemplo: 'POST' e digite o endereço que a aplicação está rodando. Depois, abaixo na opção 'Body' escolha o formato 'JSON' para poder enviar informações no corpo da requisição. Para executar, clique no botão 'Send'.

<div align="center">
  <img src="./assets/create-request-insomnia.png" />
</div>

Também é possivel organizar as rotas em pastas e configurar variáveis se ambiente no Insomnia. Para criar uma variável de ambiente, clique na opção de 'No Environment' e clique na opção 'Manage Environments'. Apois isso clique no botão de '+' e clicar em 'Environment' para adicionar um novo, onde podemos por exemplo criar o ambiente de 'dev' de desenvolvimento. Nesse ambiente podemos definir a nossa 'BASE_URL', podendo acessa-la em qualquer lugar.

<div align="center">
  <img src="./assets/variavel-de-ambiente.png" />
</div>

Depois podemos usar ele, selecionando na opção de 'No Environment' e atualizando o endereço da API para a variavel de ambiente.

<div align="center">
  <img src="./assets/variavel-de-ambiente-2.png" />
</div>

Podemos transformar os recursos em variaveis, podendo chama-los em lugares expecíficos, como por exemplo, clicar na pasta de users com o botão direito e escolher a opção de 'Environment', onde podemos chamar ela de 'RESOURCE':

<div align="center">
  <img src="./assets/variavel-de-ambiente-3.png" />
</div>

A variável de ambiente que é criada dentro de uma pasta só é disponivel para a mesma.

<div align="center">
  <img src="./assets/variavel-de-ambiente-4.png" />
</div>

<a id="Licensa"></a>
## 📝 License

Este projeto possui uma Licença MIT License - veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

<div align="center">
  Made with ❤️ by Davi Teixeira
</div>
