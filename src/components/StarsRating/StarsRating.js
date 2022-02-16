import React from 'react';
import {Rating} from 'react-simple-star-rating'

import "./StarsRating.css";

const StarsRating = ({voteAverage}) => {
    return (
        <div>
            <Rating ratingValue={voteAverage*10} readonly={true} fillColor={'#f1a545'} iconsCount={10} size={25}/>
        </div>
    );
};

export default StarsRating;