document.addEventListener('DOMContentLoaded', () => {

    // Sua chave de API
    const apiKey = 'c7d887d3fab1d44ae5d223509b5c0448';
    
    const apiUrl = 'https://api.themoviedb.org/3';
    const imageUrl = 'https://image.tmdb.org/t/p/w500';

    const movieDetailsContainer = document.getElementById('movie-details-container');

    // Função para pegar o ID do filme da URL (sem alterações)
    function getMovieIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    // Função para buscar os detalhes do filme pela API (ATUALIZADA)
    async function fetchMovieDetails(movieId) {
        // --- IMPLEMENTAÇÃO 1: MOSTRA O LOADING SPINNER ---
        // Limpa o container e exibe a animação de carregamento antes de fazer a busca
        movieDetailsContainer.innerHTML = '<div class="loading-spinner"></div>';

        try {
            const response = await fetch(`${apiUrl}/movie/${movieId}?api_key=${apiKey}&language=pt-BR`);
            
            // Verifica se a resposta da API foi bem-sucedida
            if (!response.ok) {
                // Se não foi, lança um erro para ser pego pelo bloco catch
                throw new Error(`Filme não encontrado ou erro na API. Status: ${response.status}`);
            }

            const movie = await response.json();
            displayMovieDetails(movie); // Se deu tudo certo, exibe os detalhes

        } catch (error) {
            // --- IMPLEMENTAÇÃO 2: MOSTRA UMA MENSAGEM DE ERRO AMIGÁVEL ---
            console.error('Erro ao buscar detalhes do filme:', error);
            movieDetailsContainer.innerHTML = `
                <div style="text-align: center; color: #ff8a80;">
                    <h2>Oops! Algo deu errado.</h2>
                    <p>Não foi possível carregar os detalhes do filme. Por favor, tente voltar para a página inicial.</p>
                    <a href="index.html" class="back-link">← Voltar para a busca</a>
                </div>
            `;
        }
    }

    // Função para exibir os detalhes do filme na página (sem alterações)
    function displayMovieDetails(movie) {
        movieDetailsContainer.innerHTML = '';

        const releaseDate = new Date(movie.release_date).toLocaleDateString('pt-BR');

        const detailsHTML = `
            <div class="movie-details-layout">
                <div class="movie-poster">
                    <img src="${movie.poster_path ? imageUrl + movie.poster_path : 'https://via.placeholder.com/300x450'}" alt="${movie.title}">
                </div>
                <div class="movie-details-info">
                    <h1>${movie.title} (${movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'})</h1>
                    <p><strong>Sinopse:</strong> ${movie.overview || 'Sinopse não disponível.'}</p>
                    <p><strong>Data de Lançamento:</strong> ${releaseDate}</p>
                    <p><strong>Avaliação:</strong> ⭐ ${movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</p>
                    <div class="genres">
                        <strong>Gêneros:</strong>
                        ${movie.genres.map(genre => `<span>${genre.name}</span>`).join('')}
                    </div>
                    <a href="index.html" class="back-link">← Voltar para a busca</a>
                </div>
            </div>
        `;

        movieDetailsContainer.innerHTML = detailsHTML;
    }

    // Ponto de entrada do script (sem alterações)
    const movieId = getMovieIdFromUrl();
    if (movieId) {
        fetchMovieDetails(movieId);
    } else {
        movieDetailsContainer.innerHTML = '<p>ID do filme não encontrado. Volte para a página inicial e selecione um filme.</p>';
    }

});