import React, {useEffect, useState} from 'react';

import Rocket from "../Rocket/Rocket";

const Rockets = () => {
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setRockets(filterByYear(value)))
    }, [])

    const filterByYear = (rockets) => rockets.filter(rocket => rocket.launch_year < 2020)

    return (
        <div>
            {rockets.map(value => <Rocket key={value.flight_number} missionName={value.mission_name} launchYear={value.launch_year} missionPatch={value.links.mission_patch_small}/>)}
        </div>

        // <div>
        //     {rockets.filter(rocket => rocket.launch_year < 2020).map(filteredRockets => (
        //        <div>
        //            <Rocket key={filteredRockets.flight_number} missionName={filteredRockets.mission_name} launchYear={filteredRockets.launch_year} missionPatch={filteredRockets.links.mission_patch_small}/>
        //        </div>
        //     ))}
        // </div>

        // <div>
        //     {rockets.map(value => {
        //         if (value.launch_year < 2020) {
        //             return <Rocket key={value.flight_number} missionName={value.mission_name} launchYear={value.launch_year} missionPatch={value.links.mission_patch_small}/>
        //         }
        //     })}
        // </div>

    );
};

export default Rockets;