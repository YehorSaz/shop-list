import React from 'react';

import {Header} from "./Header/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (

        <div className={'main-layout'}>
            Main Layout
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout}