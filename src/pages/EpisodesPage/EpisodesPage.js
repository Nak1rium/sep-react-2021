import React, {useEffect, useState} from 'react';

import "./EpisodesPage.css";
import {episodeService} from "../../services/episode.service";
import Episode from "../../components/Episode/Episode";
import {useSearchParams} from "react-router-dom";

const EpisodesPage = () => {

    const [queris, setQueris] = useSearchParams();
    let page = queris.get('page') ? +queris.get('page') : 1;
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        episodeService.getAllFromEpisode(page).then(value => setEpisodes(value.results))
    }, [page])

    const prev = () => {
        if (page <= 2) {
            setQueris()
            return
        }
        setQueris({page:page - 1})
    }

    const next = () => {
        if (page > 2) {
            return
        }
        setQueris({page:page + 1})
    }

    return (
        <div className={'main_box'}>
            <div className={'episodes_page_box'}>
                {episodes.map(episode => <Episode key={episode.id} mainInfo={episode}/>)}
            </div>
            <div className={'multi-button'}>
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    );
};

export default EpisodesPage;