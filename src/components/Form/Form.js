import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addTodo} from "../../store/todo.slice";
import "./Form.css";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        const todo = {
            id: new Date().getTime(),
            completed: false,
            ...data
        }
        dispatch(addTodo({todo}))
        reset()
    }

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <label><input type="text" {...register('title')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;