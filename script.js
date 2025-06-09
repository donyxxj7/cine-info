// Aguarda o DOM ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Sua chave de API
    const apiKey = 'c7d887d3fab1d44ae5d223509b5c0448';
    
    // URLs base da API
    const apiUrl = 'https://api.themoviedb.org/3';
    const imageUrl = 'https://image.tmdb.org/t/p/w500';

    // Variáveis de estado para paginação
    let currentPage = 1;
    let currentSearchTerm = '';
    let totalPages = 1;

    // Selecionando elementos do DOM
    const moviesContainer = document.getElementById('movies-container');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const pageTitle = document.getElementById('page-title');
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageNumberDisplay = document.getElementById('page-number-display');

    // Função para buscar os filmes populares
    async function fetchPopularMovies(page = 1) {
        try {
            const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`);
            const data = await response.json();
            totalPages = data.total_pages;
            displayMovies(data.results);
            updatePaginationControls();
        } catch (error) {
            console.error('Erro ao buscar filmes populares:', error);
        }
    }

    // Função para buscar filmes com base em uma pesquisa
    async function searchMovies(query, page = 1) {
        try {
            const response = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=pt-BR&page=${page}`);
            const data = await response.json();
            totalPages = data.total_pages;
            
            if (data.results.length === 0) {
                moviesContainer.innerHTML = '<p>Nenhum filme encontrado com este termo.</p>';
                document.getElementById('pagination-controls').style.display = 'none'; // Esconde paginação se não houver resultados
                return;
            }

            displayMovies(data.results);
            updatePaginationControls();
        } catch (error) {
            console.error('Erro ao buscar filmes:', error);
        }
    }

    // Função para exibir os filmes na tela
    function displayMovies(movies) {
        moviesContainer.innerHTML = '';
        movies.forEach(movie => {
            const movieLink = document.createElement('a');
            movieLink.href = `movie.html?id=${movie.id}`;
            movieLink.classList.add('movie-card');
            movieLink.innerHTML = `
                <img src="${movie.poster_path ? imageUrl + movie.poster_path : 'https://via.placeholder.com/200x300'}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <div class="rating">
                        <span>⭐</span>
                        <span>${movie.vote_average.toFixed(1)}</span>
                    </div>
                </div>
            `;
            moviesContainer.appendChild(movieLink);
        });
    }

    // Função para atualizar os controles de paginação
    function updatePaginationControls() {
        document.getElementById('pagination-controls').style.display = 'flex';
        pageNumberDisplay.textContent = `Página ${currentPage}`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }

    // Event Listener para o formulário de busca
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        pageTitle.textContent = `Resultados para: "${searchTerm}"`;
        
        currentPage = 1; // Reseta para a primeira página a cada nova busca
        currentSearchTerm = searchTerm;

        if (currentSearchTerm) {
            searchMovies(currentSearchTerm, currentPage);
        } else {
            pageTitle.textContent = 'Filmes Populares';
            fetchPopularMovies(currentPage);
        }
    });

    // Event Listeners para os botões de paginação
    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            currentSearchTerm ? searchMovies(currentSearchTerm, currentPage) : fetchPopularMovies(currentPage);
        }
    });

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            currentSearchTerm ? searchMovies(currentSearchTerm, currentPage) : fetchPopularMovies(currentPage);
        }
    });

    // Chamada inicial para carregar os filmes populares
    fetchPopularMovies(currentPage);
});