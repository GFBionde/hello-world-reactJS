# Hello World App - REACT JS

ReactJS é uma biblioteca JS com foco no desenvolvimento front-end, seguindo a lógica de um SPA (Single Page App) e utilizando da criação de componentes escritos em Javascript para criar a UI da aplicação. 

Para criar uma aplicação ReactJS, basta instalar a última versão do NodeJS, e atualizar npm/yarn.

Após isso, navegue até a pasta do seu projeto, e execute estes comandos via terminal:
 
```
npx create-react-app nome-app

cd nome-app

npm start
```

Ou, pelo NPM..

```
npm install create-react-app -g

create-react-app nome-app

cd nome-app

npm start
```

Dessa forma, o npx irá criar um aplicação Hello World, com toda a estrutura utilizada pelo ReactJS, e a partir do npm start, a aplicação será executada e aberta no localhost.

<br/><br/>

# Estrutura de Pastas

Dentro da pasta de seu projeto, você encontrará a pasta "public". Esta, possui o arquivo index.html -- que servirá como template para o index de seu website. 
<br/>

Note que, dentro deste .html, há uma div com o id "root" -- este id é referenciado, no arquivo index.js, pela função Render, que pertence ao objeto ReactDOM da biblioteca ReactJS. 
<br/>


```
// Div Root responsável por conter os componentes dinâmicos.
<div id="root"></div>

// Função que faz o papel de "encaixar" um componente, em um elemento.
ReactDOM.render(<App />, document.getElementById('root'));

```

Esta função recebe dois argumentos: Componente JS, Elemento DOM. Dessa forma, ela irá renderizar o componente dentro do conteúdo do elemento DOM enviado por parâmetro.
<br/>
