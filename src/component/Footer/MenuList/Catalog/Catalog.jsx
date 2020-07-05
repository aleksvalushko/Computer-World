import React from 'react';
import mod from './Catalog.module.sass';
import {NavLink} from "react-router-dom";

const Catalog = (props) => {

    let catalog = props.footer;

    return (
        <div className={mod.catalog}>
            <div className={mod.title}>КАТАЛОГ</div>
            <ul className={mod.list}>
                {
                    catalog.map(el => <NavLink to={el}>
                        <li>{el}</li>
                    </NavLink>)
                }
            </ul>
        </div>
    );
};

export default Catalog;