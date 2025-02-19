import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Song from "./pages/Song";

// Arrow Function
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// rafce: cria uma Arrow Function automaticamente
// Arrow Function simples: const App = () => <h1>Olá, Mundo!</h1>
// Nomeação de Componentes: PascalCase, por exemplo, MainSection
// Nomeação de Variável, Função, etc.. : CamelCase (Caso Camelo), por exemplo, corcovaDoCamelo
// Nomeação de classes em CSS: metodologia BEM (Blocks, Elements, Modifiers), por exemplo, bloco__elemento, pode ser usado bloco__elemento--modificador (header__link--small)
// Obs: Nomes compostos são separados por traço
// Nomeação kebab-case: nome-classe

// export default: faz com que a importação seja feita usando qualquer nome
// export "sem default": obrigatoriamente a importação terá que usar chaves e no nome terá que ser exatamente igual ao exportado, por exemplo, export {App} e import {App} from './App.jsx'
// Self closing tag: pode ser usado <Header /> ou <><Header /> caso queira colocar algo no meio
// Tag Vazia no React: é chamado de fragment ou fragmento e permite que se passe pela restrição de retornar apenas um elemento para mais de um

// Componentes recebem "props" (propriedades): são parâmetros
// Condição ternária: 5 == 5? console.log('É verdadeiro!'): console.log('É falso!')

// Condição usada para verificar undefined: artist ? artist: "Artista"
// Condição Null coalescing para não ser repetitivo a variável: artist ?? "Artista"

// A função Array(5).fill() // preenche as posições com elementos undefined
// Template String: `$(title)-$(item)` é igual Artista-2
// Spread operator: cria uma cópia deuma array ou de um objeto const newObj = {...obj}

// Comandos:
// npm init: cria um package .json nesse caso irá pedir algumas configurações
// npm init -y: cria um package .json do zero
// npm install: instala todas as dependências
// npm i vite@latest . : instala a ultima versão do vite que é uma ferramenta para mexer no front end
// npm run dev: inicia o servidor para execução do site
// npm i react-router-dom: instala o sistema de roteamento do site
// npm i express: instala o express que será usado para criar o back-end
// node ./api/server.js: executa um servidor usando o arquivo .js,nesse caso quando houver qualquer atualização no arquivo será necessário matar o servidor e iniciar novamente
// node --watch ./api/server.js: executa um servidor e observa o arquivo caso haja uma mudança reinicia o servidor
// npm i axios: instala o axios para criar lógica de conexão com a api no back-end
// npm i cors: instala a middleware cors que é uma função que acontece no meio do caminho

// Deploy:
// npm init -y: cria um package.json padrão para deploy, sendo assim, será necessário adicionar em scripts a função build para instalar:
// npm install --prefix back-end && npm install --prefix front-end && npm run build --prefix front-end
// na variável start será adicionado npm run start --prefix back-end
// No arquivo vite.config.js será adicionado build:{ target: 'esnext'} para pular uma parte top-Leve await que se refere aos navegadores alvo
// Ao executar npm run build será criado uma pasta dist com os arquivos do projeto minificado, logo a pasta que queremos está na pasta dist
// Antes de executar npm run start, é necessário criar o script start no package.json do back-end:
// "start" : node ./api/server.js
// Adicionar as rotas no arquivo back-end/servidor.js /api/.. e também em front/end/api/api.js adicionar no final da url /api
// Criar arquivo .env dentro do front-end para as variáveis de ambiente
// Importar uma biblioteca para poder acessar as variáveis de ambiente dentro do .env executar dentro da pasta front-end npm i dotenv
// Para evitar que sejam acessadas urls que não existem será necessário encaminhar para o tela index.html na pasta dist do front-end usando middleware
// Ir para pasta back-end e executar npm i path, usar o path para mostrar o diretório principal do arquivo server.js

// {
//   Array(item)
//     .fill() // preenche as posições com elementos undefined
//     .map((currentValue, index) => (
//       <SingleItem key={`${title}-${index}`} /> // cada elemento tem que ter uma key de valor único
//     ));
// }

// Quando componentes se re-rederizado: uma das ocasiões é quando uma variável de estado usada por esse componente é atualizada
// Hook: useSate
