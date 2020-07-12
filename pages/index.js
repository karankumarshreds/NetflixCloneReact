import endpoints from '../api/endpoints';
import request from '../api/request';
import '../styles/global.css';
import Row from '../components/Row';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

const Index = ({ trending, nfxOriginals, topRated, action, comedy, horror }) => {

    return (
        <div>
            <Navbar />
            <Banner movies={nfxOriginals.results} />
            <Row title="NETFLIX ORIGINALS"
                movies={nfxOriginals.results}
                isLarge={true}
                showVideo={true} />
            <Row title="Trending Now" movies={trending.results} />
            <Row title="Top Rated" movies={topRated.results} />
            <Row title="Action Movies" movies={action.results} />
            <Row title="Comedy Movies" movies={comedy.results} />
            <Row title="Horror Movies" movies={horror.results} />
        </div>
    )
};

Index.getInitialProps = async () => {
    const nfx = request();
    const trending = await nfx.get(endpoints.actionMovies);
    const nfxOriginals = await nfx.get(endpoints.netflixOriginals);
    const topRated = await nfx.get(endpoints.topRated);
    const action = await nfx.get(endpoints.actionMovies);
    const comedy = await nfx.get(endpoints.comedyMovies);
    const horror = await nfx.get(endpoints.horrorMovies);
    console.log('###################### SERVER SIDE RENDERED ######################')
    return {
        trending: { ...trending.data },
        nfxOriginals: { ...nfxOriginals.data },
        topRated: { ...topRated.data },
        action: { ...action.data },
        comedy: { ...comedy.data },
        horror: { ...horror.data }
    }

};

export default Index;

