import Row from '../components/Row';
import endpoints from '../api/endpoints';
import request from '../api/request';
import '../styles/global.css';

const Index = ({ trending, nfxOriginals }) => {

    return (
        <div>
            <Row title="NETFLIX ORIGINALS" movies={nfxOriginals.results} />
            <Row title="Trending Now" movies={trending.results} />
        </div>
    )
};

Index.getInitialProps = async () => {
    const nfx = request();
    const trending = await nfx.get(endpoints.actionMovies);
    const nfxOriginals = await nfx.get(endpoints.netflixOriginals);

    return { trending: { ...trending.data }, nfxOriginals: { ...nfxOriginals.data } }

};

export default Index;

