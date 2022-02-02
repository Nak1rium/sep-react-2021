import React from 'react';

import "./Todo.css";
import {useDispatch} from "react-redux";
import {deleteTodo, toggleCompletedTodo} from "../../store/todo.slice";

const Todo = ({todo:{id,title,completed}}) => {

    const dispatch = useDispatch();

    return (
        <div className={'todo_box'}>
            <input type="checkbox" checked={completed} onChange={()=>{dispatch(toggleCompletedTodo({id}))}}/>
            <div className={completed ? 'todo line-through' : 'todo'}>{title}</div>
            <button onClick={()=>dispatch(deleteTodo({id}))}>Delete</button>
        </div>
    );
};

export default Todo;