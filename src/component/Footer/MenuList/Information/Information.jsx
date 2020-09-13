import React from 'react';
import mod from './Information.module.sass';
import {NavLink} from "react-router-dom";

const Information = (props) => {

    let information = props.footer;

    return (
        <div className={mod.information}>
            <div className={mod.title}>ИНФОРМАЦИЯ</div>
            <div className={mod.list}>
                {
                    information.map( (el, index) => <NavLink key={index}>{el}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Information;