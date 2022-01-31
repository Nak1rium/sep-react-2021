import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import "./Form.css";
import {addCar} from "../../store";
import {carValidator} from "../validators/car.validator";

const Form = () => {
    const {
        register, handleSubmit, reset, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: "onTouched"});

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addCar({data}))
        reset()
    }


    return (
        <div className={'form_box'}>
            <form className={'form'} onSubmit={handleSubmit(submit)}>
                <div className={'input'}>
                    <label>Model: <input type="text" {...register('model')}/></label>
                    {errors.model && <span>{errors.model.message}</span>}
                </div>
                <div className={'input'}>
                    <label>Price: <input type="text" {...register('price')}/></label>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div className={'input'}>
                    <label>Year: <input type="text" {...register('year')}/></label>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;