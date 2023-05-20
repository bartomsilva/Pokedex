# Projeto Pokedéx

<img style='width: 300px' src='./public/image/Pokemon-1.webp'/>

O Projeto Pokédex é um site constituído por três paginas,cujo objetivo é por em prática todo conteúdo que foi dado no módulo de Front-end.

Os conteúdos principais a serem estudados são:

- Integração de APIs
- React Router
- Design Systems
- Estado Global

## Índice

- <a href="#funcionalidades">Funcionalidades do Projeto</a>
- <a href="#layout">Layout</a>
- <a href="#link">Visualizar este projeto</a>
- <a href="#comorodar">Como rodar este projeto</a>
- <a href="#requisitos">Requisitos do projeto</a>
- <a href="#tecnologias">Tecnologias Utilizadas</a>
- <a href="#author">Pessoas autoras</a>
- <a href="#proximospassos">Próximos Passos</a>


<span id='funcionalidades'></span>
## ⚒ Fucionalidades do Projeto

O Projeto Pokédex apesar do seu funcionamento ser bem simples, requer sólidos conceitos programação, o projeto é constituído por três páginas: Home, Pokédex e Detalhes, na página home ficam todos pokémons disponívels onde o usuário tem a posibilidade de ver mais detalhes ou capturar o pokémon, ao ser capturado é exibida uma mensagem e ele desaparece da lista de disponíveis e passa a fazer parte da pokédex, já na pokédex o usuário também pode ver mais detalhes assim como pode remover o pokemón da pokedex. A fonte de dados é uma API pública (<a href='https://pokeapi.co/'>Pokeapi</a>) que é muito utilizada para fins acadêmicos e processos seletivos.

<hr/>

<span id="layout"></span>

## Layout Desktop

![image](https://user-images.githubusercontent.com/106079184/235358386-8a2475d4-c0d0-4f6a-80e5-11733113473a.png)
![image](https://user-images.githubusercontent.com/106079184/235358406-e9f93d0e-63cb-4ef5-956e-b647d12c2197.png)

![image](https://user-images.githubusercontent.com/106079184/235358428-5708fa95-2f10-4089-bf00-4593713dc0a6.png)


<hr/>

<span id="link"></span>  
## 🔗 Demonstração<br/>
[Link do projeto!](http://bart-silva-pokedex.surge.sh/).

<br/>
<span id='comorodar'></span>
 
<hr/>

## 📄 Como rodar este projeto

### Caso queira baixar e instalar este projeto em seu computador, é necessário que tenha o git e o node instalados.

### Links:  <a href="https://nodejs.org/en">Node</a> - <a href="https://git-scm.com/">Git</a>

###  Se já tem ambos instalados ou após instalar, siga os passos abaixo:

```bash

# Copie o link a baixo

  https://github.com/bartomsilva/Pokedex.git

# Abra um terminal e digite o seguinte comando

git clone (cole a url aqui)

# acesse a página criada 

cd Pokedex

# Instale as dependências
yarn install

# Executando o Projeto
yarn dev

```

<hr/>

<span id='requisitos'></span>

## Requisitos do Projeto 

### **Requisitos**
- **Gerais:**
	- [x] O site deve ter 3 páginas: Home, Pokedex e Detalhes;
	- [x] Projeto deve seguir o [design](https://www.figma.com/file/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?t=AEi3zEmWmarf1FbP-0 "design") proposto;
	- [x] O fluxo de trocas de páginas devem ser semelhante ao [fluxograma](https://www.figma.com/proto/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?page-id=0%3A1&node-id=2%3A2&viewport=358%2C197%2C0.27&scaling=scale-down&starting-point-node-id=2%3A2 "fluxograma");
- **Página Home:**
	- [x]  Mostrar uma lista de Pokemons, contendo ao menos 20 Pokemons;
	- [x] Cada Pokemon será representado por um Card;
	- [x] Em cada card de Pokemon tem um botão para adicioná-lo à Pokedex e um outro botão para acessar os detalhes do Pokemon;
	- [x] Header dessa página terá um botão para acessar a página da Pokedex
- **Página Pokédex**
	- [x] Renderizar a lista de pokémons adicionados na pokedex;
	- [x] Em cada card de Pokemon deve ter um botão para removê-lo da Pokedex e um outro botão para acessar os detalhes do Pokemon.
	- [x] Header deve ter um botão para voltar para a Home
	- [x] Não deve ser possível adicionar o mesmo Pokemon duas vezes na Pokedex
- **Página de Detalhes**
	- [x] Mostrar os detalhes do Pokemon selecionado, com informações descritas
	- [x] Header deve ter um botão para adicionar ou remover da Pokedex e outro para voltar a página home.
- [x] [Criar um readme](https://www.youtube.com/watch?v=1QKwP0SJK-c "Crie um readme") para o projeto;

### Funções implemetadas
```
 Além do que foi folicitado, acrecentei paginação e uma página de erro.
```
<hr/>

## Responsividade

```
Funcionando em Desktop, Tablet e Celulares.
``` 
<hr/>

## Bibliotecas Utilizadas

```
- styled-components
- axios
- react-router-dom
- react-lazy-load-image-component 
- animate.css (entrada do card de detalhes)
```
<hr/>

<span id="tecnologias"></span>
## 💻 Tecnologias

![HTML](https://user-images.githubusercontent.com/106079184/227619911-eb73aabd-7739-47c0-bbcb-e0920902ead3.png)
![Javascript](https://user-images.githubusercontent.com/106079184/227620446-5307c4f2-0af2-4b7d-8696-a17780a13148.png)
![React](https://user-images.githubusercontent.com/106079184/227620813-6e3311e8-9992-407a-8cae-abf2711f1af8.png)
![React Router](https://user-images.githubusercontent.com/106079184/227621258-7a953c29-092e-43e6-a688-5d08279d7818.png)
![Styled-Components](https://user-images.githubusercontent.com/106079184/227621509-7956f644-df78-41b1-a26d-ec88112b7de1.png)
![Git](https://user-images.githubusercontent.com/106079184/227621865-d6fd9ff4-2e10-4f7f-9759-f31c6434b565.png)

<hr/>
<span id="author"></span>
## 📫 Pessoas autoras
<img style="width: 200px" src="https://avatars.githubusercontent.com/u/106079184?s=400&u=753f5466a77193fe7077e495475b242787de0435&v=4" alt="imagem do autor">

linkedin: https://www.linkedin.com/in/bart-silva-br/

