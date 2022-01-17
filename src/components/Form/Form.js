import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import "./Form.css";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

const Form = ({update}) => {

    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, formState:{errors}
    } = useForm({resolver:joiResolver(carValidator),mode:"onTouched"});

    const submit = (car) => {
        carService.create(car).then(value => update(value)).catch(error => {
        setFormError( error.response.data);
        })
    }

    return (
        <div className={'form_box'}>
            <form className={'form'} onSubmit={handleSubmit(submit)}>
                <div className={'inp_box'}><label>Model:<input type="text" defaultValue={''} {...register('model')}/></label>
                    {errors.model && <span>{errors.model.message}</span>}
                </div>
                <div className={'inp_box'}><label>Price:<input type="text" defaultValue={''} {...register('price')}/></label>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div className={'inp_box'}><label>Year:<input type="text" defaultValue={''} {...register('year')}/></label>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;