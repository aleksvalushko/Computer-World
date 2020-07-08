import React from 'react';
import mod from './Information.module.sass';
import {Link} from "react-router-dom";

const Information = (props) => {

    let information = props.footer;

    return (
        <div className={mod.information}>
            <div className={mod.title}>ИНФОРМАЦИЯ</div>
            <ul className={mod.list}>
                {
                    information.map( (el, index) => <Link key={index}>
                        <li>{el}</li>
                    </Link>)
                }
            </ul>
        </div>
    );
};

export default Information;