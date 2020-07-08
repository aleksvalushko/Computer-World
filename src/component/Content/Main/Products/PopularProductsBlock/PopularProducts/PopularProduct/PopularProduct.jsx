import React, {useState} from 'react';
import mod from './PopularProduct.module.sass';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const PopularProduct = (props) => {

    let buttons = props.icons.buttons,
        product = props.product;

    let [isMouseOver, setIsMouseOver] = useState(false);

    let mouseOver = () => {
        setIsMouseOver(true);
    };

    let mouseOut = () => {
        setIsMouseOver(false);
    };

    return (
        <div className={mod.popularProduct} onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <NavLink to={`/ProductPage/${product.id}`}>
                <img src={isMouseOver ? product.image : product.imageMain} alt="product" className={mod.productImage}/>
                <div className={mod.description}>{product.title}</div>
                <div className={mod.price}>{product.price}</div>
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
};

const mapStateToProps = (state) => {
    return {
        icons: state.icons.icons
    }
};

export default connect(mapStateToProps)(PopularProduct);