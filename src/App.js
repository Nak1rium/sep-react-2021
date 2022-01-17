import {useState} from "react";

import './App.css';
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";

function App() {
    const [trigger, setTrigger] = useState(null);

    const update = data => {
        setTrigger(data)
    }
    return (
        <div>
            <Form update={update}/>
            <div className={'main'}>
                <Cars trigger={trigger}/>
            </div>
        </div>
    );
}

export default App;
