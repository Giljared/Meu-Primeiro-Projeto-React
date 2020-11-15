# Meu Primeiro Projeto com React

Me acompanhe pelo [Linkedin](https://www.linkedin.com/in/gilvanete-silva/).

## Componentes

São funções ou classes de uso funcionais. 
Os componentes permitem que você divida a IU em partes independentes e reutilizáveis, e pense em cada parte isoladamente.
Conceitualmente, os componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas de “adereços”) e retornam elementos React que descrevem o que deve aparecer na tela.

### Props e Children

Props:
Propriedades ou props é um objeto javascript que passamos como parâmetro para componentes. São as props que nos permite reutilzar components e renderizar diferentes dados em cada um deles.

**Como no HTML passamos as props como atributos de tags.

Children:
Children é uma propriedade do objeto props. E assim como no HTML, temos as divs mães que criam uma hierarquia com os elementos filhos. Usando o children podemos modificar dados entre as tags de fechamento e abertura de um elemento.

### Consumindo dandos internos

map:
O objeto Map é um mapa simples de chave/valor. Qualquer valor (objeto e valores primitivos) pode ser usado como uma chave ou um valor.
Um objeto Map itera seus elementos em ordem de inserção — um loop for...of retorna um array de [chave, valor] para cada iteração.

Deve-se notar que um Map que é um mapa de um objeto, especialmente, um dicionário de dicionários somente irá mapear apenas para a ordem de inserção -- que é aleatória e não ordenada.

Key:
O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto, na mesma ordem em que é fornecida por um laço for...in (a diferença é que um laço for-in  enumera propriedades que estejam na cadeia de protótipos).
Object.keys() retorna um array cujo os  elementos são strings correspondentes para a propriedade enumerável encontrada diretamento sobre o objeto. A ordenação das propriedades é a mesma que a dada pelo loop sobre as propriedades do objeto manualmente.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### npm start

Scripts #
Dentro do projeto recém-criado, você pode executar alguns comandos integrados:

npm startou yarn start#
Executa o aplicativo em modo de desenvolvimento. Abra http: // localhost: 3000 para visualizá-lo no navegador.

A página será recarregada automaticamente se você fizer alterações no código. Você verá os erros de compilação e avisos de lint no console.

## O que é react?

É uma ferramenta que nasceu no Facebook para sincronizar as diferentes informações/atualizações que aconteciam na tela!

Além disso, se tornou bastante popular devido ao fato de permitir o reuso de componentes, fácil manutenção no código e alta performance.smiley

Documentação oficial do [React](https://pt-br.reactjs.org/).


### A tríade do react

Visual: o retorno dos elementos nos componentes
Funcional: as funções de javascript que dão vida aos componentes
Estado: Cria o poder de memória nos componentes

### Dicionário react

JSX: XML + Javascript, uma sintaxe que você vai estranhar no início, mas que facilita muito nossa vida. É html dentro do javascript.
Elemento: tags html que retornam de um componente
Componente: códigos isolados, independentes e reutilizáveis, podem ser funcões ou classes.
SPA: Single page application que esse conceito de gerar experiência para os usuários, atualizando partes do código em vez da página inteira.
Props: propriedades que passamos para componentes.
Estado: memória para manipular dados em componentes.

### Arquitetura

Estrutura de pastas recomendada para um projeto em react. Importante lembrar que não precisamos criar todas as pastas, elas surgem automaticamente quando usamos o npx create-react-app.

node_modules:
Aqui ficam salvos todos os pacotes de dependências que precisamos para fazer a sintaxe react funcionar.

public:
index.html
Aqui está nosso html que recebe todos os códigos para mostrar na tela.

src
index.js
Aqui ficam as principais importações do react e o ReactDOM.render() que é responsável por mandar nossos componentes para o html.

app.js
Aqui fica nosso principal componente, que centraliza as outras funcionalidades/páginas.

Components
Aqui criamos nossos arquivos de componentes. :)

Pages
Aqui criamos nossos arquivos de páginas que recebem os componentes.

Route
Aqui criamos o arquivo de navegação das nossas páginas.

Services
Aqui criamos os arquivos onde podemos consumir dados de api.

Styles
Aqui podemos criar todos os estilos de nossos arquivos, desde o global que importamos para o app.js, até por component ou por page que importamos em cada arquivo relacionado.

Assets
Aqui salvamos todos os arquivos de imagens.

### Biblioteca ou Framework?

React é uma biblioteca para criação de interface de usuários.

Framework é uma coleção de bibliotecas.

A diferença fica explícita quando percebemos que ao usar uma lib/biblioteca podemos usar em parte do projeto e ainda refatorar para excluir a lib e o projeto continua. Já na utilização de frameworks a gente precisaria reiniciar o projeto do zero.

Um guia para iniciantes: (https://www.hostinger.com.br/tutoriais/o-que-e-react-javascript#:~:text=O%20React%20%C3%A9%20a%20biblioteca,ferramenta%20foram%20desenvolvidos%20pelo%20Facebook.)
