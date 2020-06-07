import React from 'react';
import mod from './NewsItem.module.sass';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const NewsItem = (props) => {

    let news = props.news;

    return (
        <div className={mod.news}>
            {
                news.map((el, index) => {
                    return (
                        <div className={mod.newsBlock}>
                            <Link><img src={el.image} alt={"product" + (index + 1)}/></Link>
                            <div className={mod.descriptionBlock}>
                                <button className={mod.descriptionTitle}>{el.descriptionTitle}</button>
                                <div className={mod.description}>{el.description}</div>
                                <div className={mod.date}><span>{el.date}</span></div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
};

export default connect(mapStateToProps)(NewsItem);