import React from 'react';
import {useSelector} from "react-redux";

import Car from "../Car/Car";
import "./Cars.css";

const Cars = () => {
    const {cars} = useSelector(state => state['carReducer']);

    return (
        <div className={'cars_box'}>
            <div className={'cars_container'}>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export default Cars;