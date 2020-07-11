import '../styles/Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { useState } from 'react';

const Row = ({ title, movies, isLarge, showVideo }) => {
    const [videoId, setVideoId] = useState(undefined);
    const videoOptions = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    };
    const onClick = (movie) => {
        // do nothing for rows other than netflix originals 
        if (!showVideo) return;
        // close/hide if already running 
        if (videoId) setVideoId(undefined)
        else {
            // searches the name on youtube and returns url
            movieTrailer(movie?.name || "")
                .then(url => {
                    // www.youtube.com/blahblah?v=<ID>
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setVideoId(urlParams.get('v'));
                }).catch((err) => console.log(err));
        }

    };
    const posterUrl = "https://image.tmdb.org/t/p/w500/";
    const renderedRow = movies.map(movie => {
        return (
            <img
                className={`row__poster ${isLarge && 'row__posterLarge'}`}
                src={`${posterUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.title}
                key={movie.id}
                onClick={() => onClick(movie)} />
        );
    });

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {renderedRow}
            </div>
            {videoId && <YouTube videoId={videoId} opts={videoOptions} />}
        </div>
    );
};

export default Row;