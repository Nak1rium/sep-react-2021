import React from 'react';
import {Link, Outlet} from "react-router-dom";

import "./Layout.css";

const Layout = () => {
    return (
        <>
            <div className={'header'}>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;