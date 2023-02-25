import api from "../api";
import { setMovie, setSimilarMovies } from "../redux/slices/movieSlice";
import { setAllMovies, setSearchResults } from "../redux/slices/moviesSlice";
import { requests } from "../utils/requests";

export const getMovies = async (dispatch: any, setError: Function, setLoading: Function, page?: number) => {
    try {
        const popular = await (await api.get(`/movie/popular?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=${page ? page : 1}`)).data
        const topRated = await (await api.get(`/movie/top_rated?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=${page ? page : 1}`)).data
        const upcoming = await (await api.get(`/movie/upcoming?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=${page ? page : 1}`)).data
        const nowPlaying = await (await api.get(`/movie/now_playing?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=${page ? page : 1}`)).data
        const latest = await (await api.get(`/movie/latest?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=${page ? page : 1}`)).data

        const romance = await (await api.get(`${requests.fetchRomanceMovies}`)).data
        const action = await (await api.get(`${requests.fetchActionMovies}`)).data
        const horror = await (await api.get(`${requests.fetchHorrorMovies}`)).data
        const comedy = await (await api.get(`${requests.fetchComedyMovies}`)).data
        const netflixOriginals = await (await api.get(`${requests.fetchNetflixOriginals}`)).data
        const documentaries = await (await api.get(`${requests.fetchDocumentaries}`)).data

        dispatch(setAllMovies({ popular, topRated, latest, upcoming, nowPlaying, romance, action, comedy, horror, netflixOriginals, documentaries }));
        setLoading(false)
    }
    catch (error: any) {
        setError("Failed to fetch movies")
    }
}

export const getSearchedMovies = async (query: string, dispatch: any, setError: Function, setLoading: Function, page?: number) => {
    try {
        const response = await api.get(`/search/movie?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=${page ? page : 1}&include_adult=false`)
        const data = response.data
        console.log(data);
        dispatch(setSearchResults(data.results));
        setLoading(false)
    } catch (error) {
        setError("Failed to search movies")
    }
}
export const getMovie = async (id: string | undefined, dispatch: any, setError: Function, setLoading: Function) => {
    try {
        const response = await (await api.get(`/movie/${id}?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US`))
        const similarmovies = await (await api.get(`/movie/${id}/similar?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=1`)).data
        const movie = response.data
        dispatch(setMovie(movie));
        dispatch(setSimilarMovies(similarmovies.results));
        setLoading(false)
    } catch (error) {
        setError("Failed to fetch movie")
    }
}

export const searchMovies = async (query: string, dispatch: any, setError: Function, setLoading: Function) => {
    try {
        const response = await api.get(`/search/movie?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        const data = response.data
        dispatch(setSearchResults(data.results));
        setLoading(false)
    } catch (error) {
        setError("Failed to search movies")
    }
}

