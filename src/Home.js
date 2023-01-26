import Navigation from "./Navigation";
import Header from "./Header";
import CardList from "./CardList";
import Footer from "./Footer";
import MoviesData from "./Data/Upcoming/MoviesData";
import TeluguMoviesData from "./Data/Upcoming/TeluguMoviesData";
import TamilMoviesData from "./Data/Upcoming/TamilMoviesData";
export default function Home() {
    return (<div className='Home'>
        <Header />
        <h2>Upcoming Exciting Movies</h2>
        <CardList Data={MoviesData} />
        <h2>Sankranthi Telugu Movies</h2>
        <CardList Data={TeluguMoviesData} />
        <h2>Pongal Tamil Movies</h2>
        <CardList Data={TamilMoviesData} />s
        <Footer />
        </div>)
}