import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";

import "./Pagination.css";

const Pagination = () => {
    const [params] = useSearchParams();
    const [queries, setQueris] = useSearchParams();

    useEffect(() => {
        const page = queries.get('page');
        if (page) {
            setCurrentButton(+page);
        }
    }, [])

    const pages = 500;
    const numberOfPages = [];
    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);
    const [arrOfCurrentButtons, setArrOfCurrentButtons] = useState([]);

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrentButtons];

        let dotsInitial = '...';
        let dotsLeft = '... ';
        let dotsRight = ' ...';

        if (currentButton >= 1 && currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
        } else if (currentButton === 4) {
            const sliced = numberOfPages.slice(0, 5)
            tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
        } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
            const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)
            const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)
            tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length])
        } else if (currentButton > numberOfPages.length - 3) {
            const sliced = numberOfPages.slice(numberOfPages.length - 4)
            tempNumberOfPages = ([1, dotsLeft, ...sliced])
        } else if (currentButton === dotsInitial) {
            setCurrentButton(arrOfCurrentButtons[arrOfCurrentButtons.length - 3] + 1)
        } else if (currentButton === dotsRight) {
            setCurrentButton(arrOfCurrentButtons[3] + 2)
        } else if (currentButton === dotsLeft) {
            setCurrentButton(arrOfCurrentButtons[3] - 2)
        }
        setArrOfCurrentButtons(tempNumberOfPages);
    }, [currentButton])

    const setUp = (page = null) => {
        let q = {};
        [...params.entries()].filter(entry => {
            if (entry[0] === 'page') {
                return page
            }
            return true
        }).forEach(entry => {
            const [param, value] = entry;
            q[param] = value;
        })
        if (page) {
            setQueris({...q, page})
            return
        }
        setQueris({...q})
    }

    const prev = async () => {
        const page = currentButton === 1 ? currentButton : currentButton - 1;
        await setCurrentButton(page);
        setUp(page)
    }

    const number = async (page) => {
        if (page === '...') {
            page = (arrOfCurrentButtons[arrOfCurrentButtons.length - 3] + 1)
        } else if (page === '... ') {
            page = (arrOfCurrentButtons[3] - 2)
        } else if (page === ' ...') {
            page = (arrOfCurrentButtons[3] + 2)
        }
        await setCurrentButton(page)
        setUp(page)
    }

    const next = async () => {
        const page = currentButton === numberOfPages.length ? currentButton : currentButton + 1;
        await setCurrentButton(page);
        setUp(page)
    }

    return (
        <div>
            <div className={'pagination_container'}>
                <Link className={`${currentButton === 1 ? 'disable' : ''}`} to={''}
                      onClick={prev}
                >Prev</Link>
                {arrOfCurrentButtons.map(page => {
                    return (
                        <Link to={''} key={page} className={currentButton === page ? 'active' : ''}
                              onClick={() => number(page)}
                        >{page}</Link>
                    )
                })}
                <Link className={`${currentButton === numberOfPages.length ? 'disable' : ''}`} to={''}
                      onClick={next}
                >Next</Link>
            </div>
        </div>
    );
};

export default Pagination;