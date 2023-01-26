import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import Suggestion from "./Suggestions/Suggestion"
import App from "./App"

export default function Navigation() {
    return (
        <BrowserRouter>
            <nav className='Navigation'>

                <ul>
                    <li><Link to='/' className='Navigation--links'>Hungry Cinema</Link></li>
                    <li><Link to='/Movies' className='Navigation--links'>Movies</Link></li>          
                    <li><Link to='/' className='Navigation--links'>TV Shows</Link></li>
                    <li><Link to='/' className='Navigation--links'>Anime</Link></li>

                </ul>
                <Routes>
                    <Route exact path='/Movies' element={Suggestion}></Route>
                    <Route exact path='/' element={App}></Route>
                </Routes>
            </nav>
        </BrowserRouter>)
}

{/*  <li><a href='#' className='Navigation--links'>Movies</a></li>
                <li><a href='#' className='Navigation--links'>TV Shows</a></li>
                <li><a href='#' className='Navigation--links'>Anime</a></li>*/
    <p>One Stop destination for all movie lovers</p>

}
