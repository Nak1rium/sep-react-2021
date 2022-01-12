import React from 'react';

import './Rocket.css';

const Rocket = (props) => {
    const {missionName, launchYear, missionPatch} = props;

    return (
        <div className={'main'}>
            <div className={'text_box'}>
                <div> <span> <p>{missionName}</p> </span> </div>
                <div> <span> <p>{launchYear}</p> </span> </div>
            </div>
            <img src={missionPatch} alt={missionName}/>
        </div>
    );

};

export default Rocket;