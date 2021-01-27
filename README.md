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

<br/>

# Estrutura de Pastas

<img src="https://i.imgur.com/FpocJil.png" />

Com o projeto criado, sua estrutura de pastas deve estar semelhante à esta.
<br/>

O diretório **node_modules** possui os módulos do seu projeto que foram instalados via npm. Normalmente, não se faz alterações nela.
<br/>

O **diretório "public"** possui os arquivos públicos da sua aplicação, como os documentos HTML e imagens, por exemplo. Note que ela já contem um index.html -- que neste exemplo serve como template para o index de seu website. 
<br/>

Por último, o **diretório "src"** que engloba seus arquivos de código-fonte JS, CSS, JSX.


# Sobre este exemplo

Note que, o arquivo index.html (dir public) possui uma div com o id "root" -- este id é referenciado dentro do arquivo index.js (dir src), pela função Render, que pertence ao objeto ReactDOM da biblioteca ReactJS. 
<br/>


```
// Div Root responsável por conter os componentes dinâmicos.
<div id="root"></div>

// Função que faz o papel de "encaixar" um componente, em um elemento.
ReactDOM.render(<App />, document.getElementById('root'));
```

<br/>
Esta função recebe dois argumentos: 1. Componente JS, 2. Elemento DOM. Dessa forma, ela irá renderizar o componente dentro do conteúdo do elemento DOM enviado por parâmetro, construindo assim a UI através de elementos criados pelo ReactJS.

<br/>


