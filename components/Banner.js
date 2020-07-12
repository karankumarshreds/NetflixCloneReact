import '../styles/Banner.css';
import { useEffect, useState } from 'react';

const Banner = ({ movies }) => {
    const [movieData, setMovieData] = useState(undefined);

    useEffect(() => {
        const randIndex = Math.floor(Math.random() * 20);
        setMovieData(movies[randIndex]);
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData?.backdrop_path})`,
                backgroundPosition: "center center"
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movieData?.title || movieData?.name || movieData?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movieData?.overview, 200)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;

// background-size: cover; background-image: url("https://image.tmdb.org/t/p/original//AmIHaw6CQWOfBCQYom15Jzsu7OB.jpg"); background-position: center center;