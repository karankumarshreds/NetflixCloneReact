import '../styles/Row.css';

const Row = ({ title, movies }) => {
    const posterUrl = "https://image.tmdb.org/t/p/w500/";
    const renderedRow = movies.map(movie => {
        return (
            <img
                className="row__poster"
                src={`${posterUrl}${movie.poster_path}`}
                alt={movie.title}
                key={movie.id} />
        );
    });

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {renderedRow}
            </div>
        </div>
    );
};

export default Row;