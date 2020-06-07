import React from 'react';
import mod from './News.module.sass';
import {Link} from "react-router-dom";
import NewsItem from "./NewsItem/NewsItem";
import {connect} from "react-redux";

const News = (props) => {

    return (
        <div className={mod.allNews}>
            <Link className={mod.title}>ПОСЛЕДНИЕ НОВОСТИ</Link>
            <div className={mod.mouse}><img src={props.icons.mouse} alt="mouse"/></div>
            <NewsItem state={props.state}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        icons: state.icons.icons
    }
};

export default connect(mapStateToProps)(News);