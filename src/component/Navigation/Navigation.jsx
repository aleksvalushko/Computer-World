import React from 'react';
import mod from './Navigation.module.sass';
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";
import Aside from "./Aside/Aside";

const Navigation = () => {
    return (
        <div className={mod.navigation}>
            <Menu />
            <Slider />
            <Aside />
        </div>
    );
};

export default Navigation;