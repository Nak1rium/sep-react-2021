import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import "./Form.css";
import {carService} from "../../services/car.service";

const Form = () => {

    const [formError, setFormError] = useState(null);

    const {
        register, handleSubmit, watch, formState:{errors}
    } = useForm();

    const submit = (car) => {
        carService.create(car).then(value => console.log(value)).catch(error => {
        setFormError( error.response.data);
        })
    }

    return (
        <div>
            <form className={'form'} onSubmit={handleSubmit(submit)}>
                <div><label>ID:<input type="text" defaultValue={''} {...register('id')}/></label></div>
                {formError.id && <span>{formError.id.message}</span>}
                <div><label>Model:<input type="text" defaultValue={''} {...register('model')}/></label></div>
                {formError.model && <span>{formError.model.message}</span>}
                <div><label>Price:<input type="text" defaultValue={''} {...register('price')}/></label></div>
                {formError.price && <span>{formError.price.message}</span>}
                <div><label>Year:<input type="text" defaultValue={''} {...register('year')}/></label></div>
                {formError.year && <span>{formError.year.message}</span>}
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;