import React, {useEffect, useState} from 'react';

import "./Character.css";

const Character = ({character}) => {

    const [characterInfo, setCharacterInfo] = useState([]);

    useEffect(() => {
        fetch(character)
            .then((value) => value.json())
            .then((value) => setCharacterInfo(value))
    }, [character])

    useEffect(() => {
        if (characterInfo.status === 'Alive') setColor('green')
        if (characterInfo.status === 'Dead') setColor('red')
        if (characterInfo.status === 'unknown') setColor('grey')
    }, [characterInfo])

    const [color, setColor] = useState('');

    return (
        <div className={'main_character_box'}>
            <div className={'img'}>
                <img src={characterInfo.image} alt={characterInfo.name}/>
            </div>
            <div className={'main_info'}>
                <div className={'name'}>{characterInfo.name}</div>
                <div className={'box'}>
                    <div className={`ball ${color}`}>{''}</div>
                    <div>{characterInfo.status} -</div>
                    <div className={'species'}>{characterInfo.species}</div>
                </div>
                <div className={'origin'}>
                    <div><span>Origin location:</span></div>
                    <div>{characterInfo.origin?.name}</div>
                </div>
                <div className={'last_location'}>
                    <div><span>Last known location:</span></div>
                    <div>{characterInfo.location?.name}</div>
                </div>
            </div>
        </div>
    );
};

export default Character;