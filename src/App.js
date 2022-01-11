import './App.css';
import Users from "./components/Users/Users";
import Comments from "./components/Comments/Comments";
import Posts from "./components/Posts/Posts";


function App() {
    return (
        <div>
            <div className={'TheCurse'}>
                <Users/>
                <Comments/>
            </div>
            <Posts/>
        </div>
    );
}

export default App;
