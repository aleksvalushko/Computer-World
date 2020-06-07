import React from 'react';
import mod from './Menu.module.sass';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Menu = (props) => {

    let menu = props.navigation.menu;

    return (
        <div className={mod.menu}>
            {
                menu.map((el, index) => {
                    return (<NavLink to={'/el' + (index + 1)}>
                        <div className={mod.item}>{el.name}
                            <ul className={mod.list}>
                                {
                                    el.items.map((el, index) => {
                                        return <NavLink to={'/item' + (index + 1)}>
                                            <li className={mod.listItem}>{el}</li>
                                        </NavLink>
                                    })
                                }
                            </ul>
                            <img src={props.icons.arrowRightRed} alt="arrowRight"/></div>
                    </NavLink>);
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation.navigation,
        icons: state.icons.icons
    }
};

export default connect(mapStateToProps)(Menu);