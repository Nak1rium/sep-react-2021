import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import "./Car.css";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

const Car = ({car, update}) => {
    const {id, model, price, year} = car;

    const deleteById = () => {
        carService.deleteById(id).then(() => update(car))
    }

    const [show, setShow] = useState(true);

    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, formState:{errors}
    } = useForm({resolver:joiResolver(carValidator),mode:"onTouched"});

    const submit = (car) => {
        carService.updateById(id,car).then(value => update(value)).then(()=>setShow((s) => !s)).catch(error => {
            setFormError( error.response.data);
        })
    }

    return (
        <div>
            {show ? <div className={'car_box'}>
                    <div className={'car'}>
                        <div><span>Id</span>: {id}</div>
                        <div><span>Model:</span> {model}</div>
                        <div><span>Price:</span> {price}</div>
                        <div><span>Year:</span> {year}</div>
                    </div>
                    <div className={'btn_box'}>
                        <button onClick={deleteById}>Delete</button>
                        <button onClick={() => setShow((s) => !s)}>Change</button>
                    </div>
                </div>
                :
                <div className={'car_box'}>
                    <div className={'car'}>
                        <div><span>Id</span>: {id}</div>
                        <form className={'change_form'} onSubmit={handleSubmit(submit)}>
                            <div className={'change_inp_box'}><label>Model:<input type="text" defaultValue={model} {...register('model')}/></label>
                                {errors.model && <span>{errors.model.message}</span>}
                            </div>
                            <div className={'change_inp_box'}><label>Price:<input type="text" defaultValue={price} {...register('price')}/></label>
                                {errors.price && <span>{errors.price.message}</span>}
                            </div>
                            <div className={'change_inp_box'}><label>Year:<input type="text" defaultValue={year} {...register('year')}/></label>
                                {errors.year && <span>{errors.year.message}</span>}
                            </div>
                            <button>Save</button>
                        </form>
                    </div>
                    <div>
                        <button onClick={() => setShow((s) => !s)}>Back</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default Car;