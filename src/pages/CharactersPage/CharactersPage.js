import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

import Character from "../../components/Character/Character";
import "./CharactersPage.css";

const CharactersPage = () => {

    useEffect(() => {
        let header = document.getElementById('header');
        header.style.background = 'yellow';
        return () => {
            header.style.background = '';
        }
    },[])

    const state = useLocation().state.characters;

    return (
        <div className={'characters_main_page'}>
            {state.map(character =>(<Character key={character} character={character}/>))}
        </div>
    );
};

export default CharactersPage;

