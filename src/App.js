import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Header from './Header';
import Card from './Card';
import CardList from './CardList';
import MoviesData from './Data/MoviesData';
import TeluguMoviesData from './Data/TeluguMoviesData';
import TamilMoviesData from './Data/TamilMoviesData';

function App() {
  return (
      <div className="App">
          
          <Navigation />
          <Header />
          <h2>Upcoming Exciting Movies</h2>
          <CardList Data={MoviesData} />
          <h2>Sankranthi Telugu Movies</h2>
          <CardList Data={TeluguMoviesData} />
          <h2>Pongal Tamil Movies</h2>
          <CardList Data={TamilMoviesData} />
    </div>
  );
}

export default App;
