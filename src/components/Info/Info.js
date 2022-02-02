import React from 'react';
import {useSelector} from "react-redux";

import "./Info.css";

const Info = () => {
    const {todos} = useSelector(state => state['todoReducer']);

    const completedTodo = () => {
      return todos.filter(todo => todo.completed).length
    }

    return (
        <div className={'info'}>
            <div>All: {todos.length}</div>
            <div>Completed: {completedTodo()}</div>
        </div>
    );
};

export default Info;