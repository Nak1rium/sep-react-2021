import './App.css';
import {Routes, Route} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";


function App() {

    return (
        <div className={'main'}>
            <div className={'blur'}>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={'/'} element={<EpisodesPage/>}/>
                        <Route path={':name/characters'} element={<CharactersPage/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
