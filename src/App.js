import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Header from './Header';
import Card from './Card';
import CardList from './CardList';
import MoviesData from './Data/MoviesData';

function App() {
  return (
      <div className="App">
          
          <Navigation />
          <Header />
          <h2>Upcoming Exciting Movies</h2>
          <CardList Data={MoviesData} />
    </div>
  );
}

export default App;
