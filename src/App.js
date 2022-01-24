import {Route, Routes} from "react-router-dom";

import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import Image from "./components/Image/Image";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<MainPage/>}>
                    <Route path={':element'} element={<Image/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
