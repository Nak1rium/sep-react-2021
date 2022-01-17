import './App.css';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";

function App() {
    return (
        <div>
            <Form/>
            <div className={'main'}>
                <Cars/>
            </div>
        </div>
    );
}

export default App;
