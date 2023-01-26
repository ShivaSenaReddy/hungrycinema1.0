import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Header from './Header';
import Card from './Card';
import CardList from './CardList';
import Footer from './Footer';
import { Link, BrowserRouter, Route, Routes, HashRouter } from "react-router-dom"
import Suggestion from "./Suggestions/Suggestion"
import Home from './Home';
import { Component } from 'react';
import { FeelGoodMovies } from './Suggestions/Moviesugesstions/ComedyMovies';

function App() {

    return (
        <HashRouter>
            <div className="App">
                <div className='Navigation'>
                    <ul>
                        <li><Link to='/' className='Navigation--links'>Hungry Cinema</Link></li>
                        <li><Link to='/Movies' className='Navigation--links'>Movies</Link></li>
                        <li><Link to='/Tvshows' className='Navigation--links'>TV Shows</Link></li>
                        <li><Link to='/Anime' className='Navigation--links'>Anime</Link></li>
                    </ul >
                </div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Movies' element={<Suggestion FeelGood={FeelGoodMovies} Comedy={FeelGoodMovies}/>}></Route>
                    <Route path='/TvShows' element={<Suggestion FeelGood={FeelGoodMovies} />}></Route>
                    <Route path='/Anime' element={<Suggestion FeelGood={FeelGoodMovies} />}></Route>
                </Routes>

            </div>

        </HashRouter >

    );
}


export default App;
