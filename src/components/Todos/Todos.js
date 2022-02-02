import React from 'react';
import {useSelector} from "react-redux";

import Todo from "../Todo/Todo";
import "./Todos.css";

const Todos = () => {
    const {todos} = useSelector(state => state['todoReducer']);

    return (
        <div className={'todos_box'}>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;