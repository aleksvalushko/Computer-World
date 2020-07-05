import React from 'react';
import mod from './PopularProduct.module.sass';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const PopularProducts = (props) => {

    let buttons = props.icons.buttons,
        popularProducts = props.products;

    /*function overMouse(){
      return <img src = {popularProducts.image} />;
    }

    function outMouse(){
        return <img src = {popularProducts.imageMain} />;
    }*/

    return (
        popularProducts.map(el => {

            return (
                <div className={mod.popularProduct}>
                    <NavLink to={`/ProductPage/${el.id}`}>
                        <img src={el.imageMain} /*onMouseOver={overMouse} onMouseOut={outMouse} */ alt="product"/>
                        <div className={mod.description}>{el.title}</div>
                        <div className={mod.price}>{el.price}</div>
                        <div className={mod.buttons}>
                            <button className={mod.popularProductIcon1}>
                                <img src={buttons[0]} alt="button1"/>
                                <span>Смотреть товар</span>
                            </button>
                            <button className={mod.popularProductIcon2}>
                                <img src={buttons[1]} alt="button2"/>
                                <span>Добавить в сравнение</span>
                            </button>
                            <button className={mod.popularProductIcon3}>
                                <img src={buttons[2]} alt="button3"/>
                                <span>В корзину</span>
                            </button>
                            <button className={mod.popularProductIcon4}>
                                <img src={buttons[3]} alt="button4"/>
                                <span>Быстрый заказ</span>
                            </button>
                        </div>
                    </NavLink>
                </div>
            )
        }))
};

const mapStateToProps = (state) => {
    return {
        icons: state.icons.icons,
        products: state.products.products
    }
};

export default connect(mapStateToProps)(PopularProducts);