import React from 'react';

import "./Car.css";


const Car = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <div>
            <div className={'car'}>
                <div><span>Id</span>: {id}</div>
                <div><span>Model:</span> {model}</div>
                <div><span>Price:</span> {price}</div>
                <div><span>Year:</span> {year}</div>
            </div>
        </div>
    );
};

export default Car;