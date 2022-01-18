import {Route, Routes, Link} from "react-router-dom";

import './App.css';
import PostsPage from "./pages/PostsPage/PostsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
