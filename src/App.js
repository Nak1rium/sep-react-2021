import {Route, Routes} from "react-router-dom";

import './App.css';
import PostsPage from "./pages/PostsPage/PostsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import Layout from "./components/Layout/Layout";
import PostsDetailsPage from "./pages/PostsDetailsPage/PostsDetailsPage";
import PostsCommentsPage from "./pages/PostsCommentsPage/PostsCommentsPage";
import UsersDetails from "./pages/UsersDetails/UsersDetails";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";
import UserAlbumsPage from "./pages/UserAlbumsPage/UserAlbumsPage";
import AlbumPhotosPage from "./pages/AlbumPhotosPage/AlbumPhotosPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id/albums'} element={<UserAlbumsPage/>}>
                            <Route path={':idAlbum/photos'} element={<AlbumPhotosPage/>}/>
                        </Route>
                        <Route path={':id'} element={<UsersDetails/>}>
                            <Route path={':posts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostsDetailsPage/>}>
                            <Route path={':comments'} element={<PostsCommentsPage/>}/>
                            </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
