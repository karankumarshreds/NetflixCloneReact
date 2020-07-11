const API_KEY = '0e5f435d66c5524f0c8239759f8b2e32';

const endpoints = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`
}

export default endpoints;