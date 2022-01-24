import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import "./MainPage.css";
import {urls} from "../../configs/urls";

const MainPage = () => {

  const navigate = useNavigate();

    return (
        <div className={'main_page_main'}>
        <div className={'main_page'}>
            {urls.map(url => {
                return <button className={'main_page_button'} onClick={() => navigate(url)} key={url}>{url}</button>
            })}
        </div>
            <Outlet/>
        </div>
    );
};

export default MainPage;