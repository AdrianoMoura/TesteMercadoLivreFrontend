# Teste Frontend - Mercado Livre

Desenvolvido com 
- React.js
- Express
- NodeJS
- Next.js
- Sass
- Webpack

## Getting Started
```
$ npm i
$ npm run dev
```

para executar em produção
```
$ npm start
```

O Next.js lida com a compilação do código do React para o build de produção


## Explicando

Antes de optar por seguir com a aplicação em SSR pesquisei a respeito do impacto de SPA's no SEO, encontrei artigos que indicam que os bots dos buscadores já são capazes de interpretar o conteúdo de um site renderizado totalmente no cliente, mas optei pelo SSR pois ainda seria uma opção segura, já que não sei até onde vai a eficiencia do rankeamento de sites SPA

Nisso usei o Next.js com Express, com o Next.js foi possível lidar com a renderização da página pelo lado do servidor no momento que o usuário acessa o site mas garantindo que as futuras trocas de páginas sejam renderizadas em client side como uma SPA, dessa forma tenho a vantagem do Server Rendering para otimização de SEO e para limitar a quantidade de conteúdo a ser carregada no primeiro acesso junto com a eficiencia das trocas de página em uma SPA