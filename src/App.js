import './App.css';
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";
import Info from "./components/Info/Info";

function App() {
    return (
        <div>
            <Info/>
            <Form/>
            <Todos/>
        </div>
    );
}

export default App;
