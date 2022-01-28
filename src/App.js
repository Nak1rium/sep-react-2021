import './App.css';
import {useReducer} from "react";

function App() {

    const reducer = (state, action) => {
        if (action.type === 'inc') {
            return {...state, count1: state.count1 + 1}
        }
        if (action.type === 'dec') {
            return {...state, count1: state.count1 - 1}
        }
        if (action.type === 'reset') {
            return {...state, count1: state.count1 = 0}
        }
        if (action.type === 'inc2') {
            return {...state, count2: state.count2 + 1}
        }
        if (action.type === 'dec2') {
            return {...state, count2: state.count2 - 1}
        }
        if (action.type === 'reset2') {
            return {...state, count2: state.count2 = 0}
        }
        if (action.type === 'inc3') {
            return {...state, count3: state.count3 + 1}
        }
        if (action.type === 'dec3') {
            return {...state, count3: state.count3 - 1}
        }
        if (action.type === 'reset3') {
            return {...state, count3: state.count3 = 0}
        }
    }

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div>
            <div>{state.count1}</div>
            <button onClick={() => dispatch({type: 'inc'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
            <button onClick={() => dispatch({type: 'reset'})}>RESET</button>
            <div>{state.count2}</div>
            <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
            <button onClick={() => dispatch({type: 'reset2'})}>RESET</button>
            <div>{state.count3}</div>
            <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
            <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
            <button onClick={() => dispatch({type: 'reset3'})}>RESET</button>
        </div>
    );
}

export default App;
