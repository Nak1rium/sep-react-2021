import React from 'react';

import "./Layout.css";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div id={'header'}>
                <Link to={'/'}>Episodes</Link>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;