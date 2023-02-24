
export const requests = {
    fetchTrending: `/trending/all/week?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/movie?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&with_networks=213`,
    fetchActionMovies: `/discover/movie?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&with_genres=99`,
}
