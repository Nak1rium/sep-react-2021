import React from 'react';

import "./Layout.css";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className={'header'}>
                <Link to={'/cars'}>Cars</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/comments'}>Comments</Link>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;