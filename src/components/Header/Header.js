import React, {useEffect} from 'react';
import {Link, Outlet} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import "./Header.css";
import {getData} from "../../store/movies.slice";

const Header = () => {
    const {handleSubmit, register} = useForm();
    const dispatch = useDispatch();

    const getMoviesBySearchParams = (data) => {
        dispatch(getData(data));
    }

    useEffect(() => {
        const toggle = document.getElementById('toggle');

        toggle.addEventListener('change', () => {
           if (document.body.classList.contains('dark')) {
               document.body.classList.remove('dark')
               localStorage.theme = 'light';
           } else {
               document.body.classList.add('dark')
               localStorage.theme = 'dark';
           }
        })
    }, [])

    useEffect( ()=> {
        if (localStorage.theme === 'dark') {
            document.body.classList.add('dark')
            const toggle = document.getElementById('toggle');
            toggle.setAttribute('checked',false);
        }
    },[])

    return (
        <div className={'main_wrapper'}>
            <div className={'header'}>
                <div>
                    <span className="slide-btn-alt">
                       <input type="checkbox" name={'theme'} id={'toggle'} />
                       <div className="slide-btn-content">
                           <span>day</span>
                           <span className="slide-btn-handle"></span>
                           <span>night</span>
                       </div>
                    </span>
                </div>
                <Link to={'/'}>
                    <div className={'movie_app'}>Movie app</div>
                </Link>
                <div className={"container"}>
                    <form className="nosubmit" onSubmit={handleSubmit(getMoviesBySearchParams)}>
                        <input className="nosubmit" type="text" placeholder="Search..."
                               defaultValue={''} {...register('search')}/>
                    </form>
                </div>
                <div>User</div>
            </div>
            <Outlet/>
        </div>
    );
};

export default Header;