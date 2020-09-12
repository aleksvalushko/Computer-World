import React from 'react';
import mod from './Header.module.sass';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Header = (props) => {
    return (
        <div className={mod.header}>
            <div className={mod.contacts}>
                <div className={mod.about}>О магазине</div>
                <div className={mod.contact}>
                    <div className={mod.phone}><img src={props.icons.mts} alt="mts"/><span>+375-29</span>-719-17-21</div>
                    <div className={mod.mail}><img src={props.icons.mail} alt="e-mail"/><span>viktor.valushko</span>@yandex.ru</div>
                </div>
                <button className={mod.registration}>
                    <div className={mod.personIcon}><img src={props.icons.login} alt="log"/></div>
                    <div>Вход</div>
                    <div className={mod.arrowDown}><img src={props.icons.arrowDown} alt='arrowDown'/></div>
                </button>
            </div>
            <div className={mod.searchBlock}>
                <Link to='/' className={mod.logo}><img src={props.icons.logo} alt="logo"/>World <span>of Computer</span></Link>
                <div className={mod.search}>
                    <input type='text' placeholder='Поиск'/>
                    <button className={mod.magnifier}><img src={props.icons.search} alt="search"/></button>
                </div>
                <div className={mod.actBlock}>
                    <div className={mod.scales}><img src={props.icons.scales} alt="scales"/><figcaption>Сравнение</figcaption></div>
                    <div className={mod.basket}><img src={props.icons.basket} alt="basket"/><figcaption>Корзина</figcaption></div>
                </div>
            </div>
            <div className={mod.menuBlock}>
                <button><img src={props.icons.menu} alt="menu"/>КАТЕГОРИИ</button>
                <div className={mod.newsMenu}>Новости</div>
                <div className={mod.feedback}>Обратная связь</div>
                <div className={mod.delivery}>Доставка</div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        icons: state.icons.icons
    }
};

export default connect(mapStateToProps)(Header);