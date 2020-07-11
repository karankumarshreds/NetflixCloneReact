import '../styles/Row.css';

const Row = ({ title, movies, isLarge }) => {
    const posterUrl = "https://image.tmdb.org/t/p/w500/";
    const renderedRow = movies.map(movie => {
        return (
            <img
                className={`row__poster ${isLarge && 'row__posterLarge'}`}
                src={`${posterUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.title}
                key={movie.id} />
        );
    });

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {renderedRow}
            </div>
        </div>
    );
};

export default Row;