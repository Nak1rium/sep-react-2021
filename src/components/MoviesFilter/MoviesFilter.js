import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import "./MoviesFilter.css";
import {filters, years} from "../../shared";

const MoviesFilter = () => {
    const [params] = useSearchParams();
    const ref = useRef();

    const [showGenresResults, setShowGenresResults] = useState(false);
    const [showYearResults, setShowYearResults] = useState(false);
    const [showPopularityResults, setShowPopularityResults] = useState(false);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (showGenresResults && ref.current && !ref.current.contains(e.target)) {
                setShowGenresResults(false)
            }
            if (showYearResults && ref.current && !ref.current.contains(e.target)) {
                setShowYearResults(false)
            }
            if (showPopularityResults && ref.current && !ref.current.contains(e.target)) {
                setShowPopularityResults(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showGenresResults, showYearResults, showPopularityResults])

    const [currentGenre, setCurrentGenre] = useState('Genres');
    const [currentYear, setCurrentYear] = useState('Year');
    const [currentFilter, setCurrentFilter] = useState('By popularity');

    const {genres} = useSelector(state => state['genresReducer']);

    const [queries, setQueries] = useSearchParams();

    useEffect(() => {
        [...params.entries()].forEach(entry => {
            const [param, value] = entry;
            if (param === 'genre') {
                setCurrentGenre(value);
            }
            if (param === 'year') {
                setCurrentYear(value);
            }
            if (param === 'filter') {
                setCurrentFilter(value);
            }
        })
    }, [])

    const setGenre = (genre = 'Genres') => {
        let q = {};
        if (genre !== 'Genres' && genre !== queries.get('genre')) {
            [...params.entries()].forEach(entry => {
                const [param, value] = entry;
                q[param] = value;
            })
            setQueries({...q, genre: genre, page: 1})
        }
        if (genre === 'Genres') {
            [...params.entries()].filter(value => value[0] !== 'genre').forEach(entry => {
                const [param, value] = entry;
                q[param] = value;
            })
            setQueries({...q, page: 1})
        }
        setCurrentGenre(genre);
    }

    const setYear = (year = 'Year') => {
        let q = {};
        if (year !== 'Year' && year !== queries.get('year')) {
            [...params.entries()].forEach(entry => {
                const [param, value] = entry;
                q[param] = value;
            })
            setQueries({...q, year: year, page: 1});
        }
        if (year === 'Year') {
            [...params.entries()].filter(value => value[0] !== 'year').forEach(entry => {
                const [param, value] = entry;
                q[param] = value;
            })
            setQueries({...q,page: 1})
        }
        setCurrentYear(year);
    }

    const setFilter = (filter = 'By popularity') => {
        let q = {};
        if (filter !== 'By popularity' && filter !== queries.get('filter')) {
            [...params.entries()].forEach(entry => {
                const [param, value] = entry;
                q[param] = value;
            })
            setQueries({...q, filter: filter, page: 1});
        }
        if (filter === 'By popularity') {
            [...params.entries()].filter(value => value[0] !== 'filter').forEach(entry => {
                const [param, value] = entry;
                q[param] = value;
            })
            setQueries({...q,page: 1})
        }
        setCurrentFilter(filter);
    }


    return (
        <div className={'movies_filter'}>
            <div className={'heading'}>POPULAR FILMS</div>

            <div className={'buttons_box'} ref={ref}>
                <div>
                    <button className={'filter_button'} onClick={() => setShowGenresResults((state) => !state)}>
                        {currentGenre}<i className="arrow down">{''}</i></button>
                    {showGenresResults ? <div className={'filter_menu genres'}>
                        <div>
                            <button onClick={() => setGenre()}
                                    className={currentGenre === 'Genres' ? 'active' : 'margin'}>All
                            </button>
                        </div>
                        {genres.genres?.map(genre => {
                            return <div key={genre.name}>
                                <button onClick={() => setGenre(genre.name)}
                                        className={currentGenre === genre.name ? 'active' : 'margin'}>{genre.name}</button>
                            </div>
                        })}
                    </div> : null}
                </div>

                <div>
                    <button className={'filter_button'} onClick={() => setShowYearResults((state) => !state)}>
                        {currentYear}<i className="arrow down">{''}</i></button>
                    {showYearResults ? <div className={'filter_menu year'}>
                        <div>
                            <button onClick={() => setYear()}
                                    className={currentYear === 'Year' ? 'active' : 'margin'}>All
                            </button>
                        </div>
                        {years.map(year => {
                            return <div key={year.visibleYear}>
                                <button onClick={() => setYear(year.visibleYear)}
                                        className={currentYear === year.visibleYear ? 'active' : 'margin'}>{year.visibleYear}</button>
                            </div>
                        })}
                    </div> : null}
                </div>

                <div>
                    <button className={'filter_button'} onClick={() => setShowPopularityResults((state) => !state)}>
                        {currentFilter}<i className="arrow down">{''}</i></button>
                    {showPopularityResults ? <div className={'filter_menu filter'}>
                        <div>
                            <button onClick={() => setFilter()}
                                    className={currentFilter === 'By popularity' ? 'active' : 'margin'}>By
                                popularity
                            </button>
                        </div>
                        {filters.map(filter => {
                            return <div key={filter.visibleFilter}>
                                <button onClick={() => setFilter(filter.visibleFilter)}
                                        className={currentFilter === filter.visibleFilter ? 'active' : 'margin'}>{filter.visibleFilter}</button>
                            </div>
                        })}
                    </div> : null}

                </div>
            </div>
        </div>
    );
};

export default MoviesFilter;