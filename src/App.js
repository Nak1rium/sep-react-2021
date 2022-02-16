import {Route, Routes} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import MoviesPage from "./components/pages/MoviesPage/MoviesPage";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'/'} element={<MoviesPage/>}/>
                    <Route path={'/:title'} element={<MovieInfo/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
