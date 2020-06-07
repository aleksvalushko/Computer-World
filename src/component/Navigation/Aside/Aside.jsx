import React from 'react';
import mod from './Aside.module.sass';
import {connect} from "react-redux";

const Aside = (props) => {

    let aside = props.navigation.asides;

    return (
        <div className={mod.asides}>
            {
                aside.map((el, index) => {
                    const buttonClass = el.id === 1 ? `${mod.aside}` : `${mod.aside2}`;

                    return (
                        <div className={buttonClass}>
                            <img src={el.img} alt={"aside" + (index + 1)}/>
                            <button className={mod.button}>Купить</button>
                        </div>
                    );
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation.navigation
    }
};

export default connect(mapStateToProps)(Aside);