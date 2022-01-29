import './App.css';
import {useReducer} from "react";

function App() {

    const addDog = response => ({type: 'dog', payload: response});
    const deleteDog = response => ({type: 'deleteDog', payload: response});

    const addCat = response => ({type: 'cat', payload: response});
    const deleteCat = response => ({type: 'deleteCat', payload: response});

    const initialState = {
        dogs: [],
        cats: []
    }

    const reducer = (state = initialState, action) => {
        if (action.type === 'dog') {
            return {...state, dogs: [...state.dogs, action.payload]}
        }
        if (action.type === 'deleteDog') {
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)}
        }
        if (action.type === 'cat') {
            return {...state, cats: [...state.cats, action.payload]}
        }
        if (action.type === 'deleteCat') {
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)}
        }
    }

    const [state, dispatch] = useReducer(reducer, {dogs: [], cats: []})

    const handleSubmitDog = event => {
        const newDog = {
            id: new Date(),
            name: event.target.dog.value
        }
        dispatch(addDog(newDog));
        event.preventDefault();
    }

    const handleSubmitCat = event => {
        const newCat = {
            id: new Date(),
            name: event.target.cat.value
        }
        dispatch(addCat(newCat));
        event.preventDefault();
    }

    return (
        <>
            <div className={'forms'}>
                <div className={'box'}>
                    <form onSubmit={handleSubmitDog}>
                        <label>Dog:<input type="text" name={'dog'}/></label>
                        <button>Save</button>
                    </form>
                    {state.dogs.map(dog => <div key={dog.id} className={'main'}>
                        <div>{dog.name}</div>
                        <button onClick={() => dispatch(deleteDog(dog.id))}>Delete</button>
                    </div>)}
                </div>
                <div className={'box'}>
                    <form onSubmit={handleSubmitCat}>
                        <label>Cat:<input type="text" name={'cat'}/></label>
                        <button>Save</button>
                    </form>
                    {state.cats.map(cat => <div key={cat.id} className={'main'}>
                        <div>{cat.name}</div>
                        <button onClick={() => dispatch(deleteCat(cat.id))}>Delete</button>
                    </div>)}
                </div>
            </div>
        </>
    );
}

export default App;
