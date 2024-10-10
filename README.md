# CineTracker

O CineTracker é um projeto de uma aplicação web destinada a ajudar os usuários a organizarem seus filmes favoritos. 

A aplicação permite que os filmes sejam marcados como favoritos, e posteriormente exibidos em uma lista personalizada. 

Além disso, estamos em constante desenvolvimento, e no futuro será implementado o consumo da API da TMDB para exibir a nota de avaliação de cada filme diretamente na plataforma.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Explicação](#explicação)
- [Como Usar](#como-usar)
- [Autor](#autor)

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/js.png" alt="Logo Linguagem" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/react.png" alt="Logo Linguagem" width="100"/>
  </div>

</div>

## Status

![Em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge)

## Descrição

O CineTracker é uma plataforma de gerenciamento de filmes favoritos. Os usuários podem visualizar filmes pré-carregados na plataforma, adicioná-los à sua lista de favoritos, e gerenciar essa lista de forma personalizada.

A interface foi desenvolvida para proporcionar uma experiência simples e intuitiva, permitindo que os usuários marquem filmes como favoritos com apenas um clique.

A aplicação também conta com uma funcionalidade que será adicionada futuramente: a integração com a API da TMDB.

Essa integração permitirá que a nota de avaliação de cada filme seja exibida diretamente na plataforma, fornecendo mais informações sobre os filmes listados.

## Funcionalidades

- Exibição de filmes pré-definidos na plataforma.
  
- Adicionar e remover filmes da lista de favoritos.
  
- Visualização dos filmes favoritos em uma página dedicada.
  
- Interface responsiva que se adapta a diferentes dispositivos.
  
- Futuro: integração com a API da TMDB para exibir a nota de avaliação dos filmes.

## Explicação

O CineTracker é uma aplicação React que permite aos usuários navegar por uma lista de filmes, visualizar detalhes específicos de cada filme e verificar a nota do TMDB para esses filmes. 

Quando o usuário acessa a aplicação, ele é direcionado para a página Home, onde são exibidos cards dos principais filmes disponíveis na plataforma.

O usuário pode clicar em qualquer card para ser redirecionado à página do filme, onde encontrará informações detalhadas sobre o mesmo, incluindo uma sinopse e a nota do TMDB.

#### Fluxo Detalhado:

1. **Início do Fluxo: Acesso à Página Home**

   - **Arquivo:** `src/pages/Inicio/index.js`
     
   - **Descrição:**
     - Quando o usuário acessa a aplicação, ele é redirecionado automaticamente para a página Home.
       
     - A página Home é responsável por carregar e exibir os cards dos filmes disponíveis.
       
     - **Interação:**
       - A página Home utiliza o componente `Banner` para exibir um banner na parte superior.
         
       - Em seguida, a página Home itera sobre os filmes listados no `db.json` e renderiza um `Card` para cada filme.
         
       - **Componentes Usados:** `Banner`, `Card`, `Titulo`
         
       - **Dados Carregados:** Os filmes são carregados a partir do arquivo `db.json` e a nota é buscada da API do TMDB via `FilmeContext`.

2. **Renderização dos Cards na Página Home**

   - **Arquivo:** `src/components/Card/index.js`
     
   - **Descrição:**
     - O `Card` é um componente que representa cada filme na página Home.
       
     - Ele exibe a capa do filme, o título e a nota do filme.
       
     - **Interação:**
       - Quando o usuário clica em um card, ele é redirecionado para a página de detalhes do filme correspondente, passando o ID do filme na URL.
       - O `Card` usa o `useFavoritoContext` para permitir que o usuário adicione o filme à sua lista de favoritos.
         
       - **Props Recebidas:** ID, título, capa, nota
         
       - **Dados Exibidos:** Título do filme, capa, nota do TMDB.

3. **Navegação e Exibição de Detalhes do Filme**

   - **Arquivo:** `src/pages/Player/index.js`
     
   - **Descrição:**
     - Quando o usuário clica em um card na página Home, ele é redirecionado para a página `Player`, que exibe detalhes sobre o filme selecionado.
       
     - **Interação:**
       - A página `Player` utiliza o `useParams` para capturar o ID do filme na URL.
       - O ID é então utilizado para buscar o filme no `db.json`.
       - A página `Player` também utiliza o `FilmeContext` para buscar a nota do filme na API do TMDB.
       - **Componentes Usados:** `Banner`, `Titulo`
       - **Dados Exibidos:** Título do filme, sinopse (do `db.json`), nota (da API do TMDB).

4. **Gerenciamento de Estado e API**

   - **Arquivo:** `src/contextos/FilmeContext.js`
     
   - **Descrição:**
     - O `FilmeContext` é responsável por gerenciar o estado relacionado aos filmes e fazer as requisições à API do TMDB para obter a nota dos filmes.
       
     - **Interação:**
       - O `FilmeContext` é utilizado em toda a aplicação para buscar e armazenar os dados dos filmes.
       - Quando a nota do filme é buscada da API, ela é armazenada em cache para evitar múltiplas requisições para o mesmo filme.
       - **Dados Manipulados:** Título, sinopse (do `db.json`), nota (da API do TMDB).

5. **Componente de Favoritos**

   - **Arquivo:** `src/contextos/Favoritos.js`
   - **Descrição:**
     - O `FavoritosContext` é responsável por gerenciar a lista de filmes favoritos do usuário.
     - **Interação:**
       - Quando o usuário clica no ícone de favorito em um card, o filme é adicionado ou removido da lista de favoritos.
       - A lista de favoritos é exibida na página de Favoritos.
       - **Componentes Usados:** `FavoritosContext.Provider`
       - **Dados Armazenados:** Lista de filmes favoritos do usuário.

6. **Configuração de Rotas**
   - **Arquivo:** `src/routes.js`
   - **Descrição:**
     - O arquivo `routes.js` define as rotas da aplicação, associando cada URL a um componente.
     - **Interação:**
       - As rotas configuradas incluem a página Home (`/`), a página de Favoritos (`/favoritos`), e a página de detalhes do filme (`/filmes/:id`).
       - **Componentes Usados:** `BrowserRouter`, `Route`, `Routes`
       - **Dados Gerenciados:** Caminhos de URL e componentes associados.

### Conclusão:

O CineTracker é uma aplicação estruturada que oferece uma experiência rica para o usuário, permitindo a navegação fácil entre os filmes e a visualização de detalhes importantes. 

O projeto utiliza uma combinação de dados locais (`db.json`) e dados dinâmicos da API do TMDB, com uma arquitetura de componentes organizada e clara. 

Cada parte da aplicação desempenha um papel importante na entrega de uma experiência coesa e eficiente.

A documentação acima fornece uma visão completa e detalhada do fluxo do projeto, desde o carregamento inicial na página Home até a exibição detalhada dos filmes e a integração com a API para busca de notas.

## Como Usar

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

```bash
  git clone https://github.com/seu-usuario/cinetracker.git
```

2. Navegue até o diretório do projeto:

```bash
  cd cinetracker
```

3. Instale as dependências:

```bash
  npm install
```

4. Execute o projeto:

```bash
npm start
```

5. Acesse a aplicação em seu navegador no endereço:
   `http://localhost:3000`

## Autor

Desenvolvido por Diego Franco.
