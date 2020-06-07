import React from 'react';
import mod from './Catalog.module.sass';
import {Link} from "react-router-dom";

const Catalog = (props) => {

    let catalog = props.footer;

    return (
        <div className={mod.catalog}>
            <div className={mod.title}>КАТАЛОГ</div>
            <ul className={mod.list}>
                {
                    catalog.map(el => <Link>
                        <li>{el}</li>
                    </Link>)
                }
            </ul>
        </div>
    );
};

export default Catalog;