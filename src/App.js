import {Route, Routes} from "react-router-dom";

import './App.css';
import FormAndCarsPage from "./pages/FormAndCarsPage/FormAndCarsPage";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                     <Route path={'/cars'} element={<FormAndCarsPage/>}/>
                     <Route path={'/users'} element={<Users/>}/>
                     <Route path={'/posts'} element={<Posts/>}/>
                     <Route path={'/comments'} element={<Comments/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
