import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import "./Car.css";
import {deleteCar, updateCar} from "../../store";
import {carValidator} from "../validators/car.validator";

const Car = ({car: {id, model, price, year}}) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(true);

    const submit = (data) => {
        dispatch(updateCar({id,data}))
    }

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: "onTouched"});

    return (
        <>
            {
                show ?
                    <div className={'car_box'}>
                        <div>
                            <div><span>Model:</span> {model}</div>
                            <div><span>Price:</span> {price}</div>
                            <div><span>Year:</span> {year}</div>
                        </div>
                        <div className={'btn_box'}>
                            <button onClick={() => dispatch(deleteCar({id}))}>Delete</button>
                            <button onClick={() => setShow((s) => !s)}>Change</button>
                        </div>
                    </div>
                    :
                    <div>
                        <div className={'change_car_box'}>
                            <div className={'change_form_box'}>
                                <form className={'change_form'} onSubmit={handleSubmit(submit)}>
                                    <div className={'change_inp_box'}><label><span>Model:</span><input type="text"
                                                                                          defaultValue={model} {...register('model')}/></label>
                                        {errors.model && <div className={'red'}>{errors.model.message}</div>}
                                    </div>
                                    <div className={'change_inp_box'}><label><span>Price:</span><input type="text"
                                                                                          defaultValue={price} {...register('price')}/></label>
                                        {errors.price && <div className={'red'}>{errors.price.message}</div>}
                                    </div>
                                    <div className={'change_inp_box'}><label><span>Year:</span><input type="text"
                                                                                         defaultValue={year} {...register('year')}/></label>
                                        {errors.year && <div className={'red'}>{errors.year.message}</div>}
                                    </div>
                                    <button>Save</button>
                                </form>
                            </div>
                            <div className={'btn_box'}>
                                <button onClick={() => setShow((s) => !s)}>Back</button>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Car;