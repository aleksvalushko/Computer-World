import React from 'react';
import mod from './Navigation.module.sass';
import Menu from "./Menu/Menu";
import Aside from "./Aside/Aside";
import Sliders from "./Slider/Slider";

const Navigation = () => {
    return (
        <div className={mod.navigation}>
            <Menu />
            <Sliders />
            <Aside />
        </div>
    );
};

export default Navigation;