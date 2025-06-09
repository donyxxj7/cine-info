# 🎬 Cine-Info: Buscador de Filmes

<p align="center">
  <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen?style=for-the-badge" alt="Status do Projeto: Concluído"/>
  <img src="https://img.shields.io/badge/licen%C3%A7a-MIT-blue?style=for-the-badge" alt="Licença MIT"/>
</p>

<p align="center">
  <strong>Tecnologias e Ferramentas Utilizadas</strong><br>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

<p align="center">
  <strong>Notas do Google Lighthouse</strong><br>
  <img src="https://img.shields.io/badge/Performance-90-brightgreen?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Performance 90"/>
  <img src="https://img.shields.io/badge/Acessibilidade-100-brightgreen?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Acessibilidade 100"/>
  <img src="https://img.shields.io/badge/Boas%20Práticas-100-brightgreen?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Boas Práticas 100"/>
  <img src="https://img.shields.io/badge/SEO-91-brightgreen?style=for-the-badge&logo=lighthouse&logoColor=white" alt="SEO 91"/>
</p>

---

Cine-Info é uma aplicação web interativa e responsiva, desenvolvida para ser uma peça de portfólio, que permite aos usuários descobrir, pesquisar e obter informações detalhadas sobre filmes. O projeto consome a API do [The Movie Database (TMDB)](https://www.themoviedb.org/) para buscar dados em tempo real.

### 🔗 [Acesse a demonstração ao vivo do projeto](https://dashing-kataifi-8b89dc.netlify.app/)

---

### Screenshot do Projeto

![Screenshot do projeto Cine-Info mostrando a grade de filmes](https://github.com/user-attachments/assets/903d3c41-81de-4805-bc0a-f7b0e48b63f9)

---

## ✨ Funcionalidades Principais

* **Busca Dinâmica:** Pesquise filmes por título e veja os resultados aparecerem instantaneamente.
* **Filmes Populares:** A página inicial carrega automaticamente os filmes mais populares do momento.
* **Página de Detalhes:** Clique em qualquer filme para ver uma página dedicada com informações completas, como sinopse, avaliação, data de lançamento, gêneros e pôster em alta qualidade.
* **Paginação:** Navegue por múltiplas páginas de resultados, tanto na listagem de populares quanto na busca.
* **Design Responsivo:** A interface se adapta perfeitamente a qualquer tamanho de tela, de desktops a celulares.
* **Feedback ao Usuário:** Indicadores de carregamento ("loading spinners") e mensagens de erro amigáveis garantem uma experiência de usuário fluida.
* **Alta Performance:** O projeto foi otimizado para performance, alcançando excelentes notas em auditorias do Google Lighthouse.

---

## 💻 Tecnologias Utilizadas

Este projeto foi construído com foco em JavaScript puro (Vanilla JS) para demonstrar um forte domínio dos fundamentos do desenvolvimento web front-end.

* **HTML5:** Estrutura semântica e organizada.
* **CSS3:** Estilização moderna com Flexbox, Grid Layout e Variáveis CSS para um design elegante e de fácil manutenção.
* **JavaScript (ES6+):** Utilização de `async/await` com a `Fetch API` para consumir dados da API do TMDB, manipulação intensiva do DOM para renderização dinâmica de conteúdo e gerenciamento de estado da aplicação (página atual, termo de busca).

---

## 🚀 Como Executar o Projeto Localmente

Para executar este projeto na sua máquina, siga os passos abaixo.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/donyxxj7/cine-info.git](https://github.com/donyxxj7/cine-info.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd cine-info
    ```

3.  **Adicione sua Chave de API:**
    * Este projeto **não funcionará** sem uma chave de API válida do TMDB.
    * Abra os arquivos `script.js` e `movie-script.js`.
    * Em cada arquivo, encontre a linha: `const apiKey = 'SUA_CHAVE_DE_API_AQUI';`
    * Substitua `'SUA_CHAVE_DE_API_AQUI'` pela sua chave pessoal.

4.  **Abra o `index.html`:**
    * Abra o arquivo `index.html` no seu navegador.
    * Para uma melhor experiência, recomendo usar a extensão **Live Server** no Visual Studio Code.

---

## Autor

Feito com muito ❤️ e código por **Dony**.

* **GitHub:** [@donyxxj7](https://github.com/donyxxj7)
* **Portfólio Principal:** Em Desenvolvimento...
