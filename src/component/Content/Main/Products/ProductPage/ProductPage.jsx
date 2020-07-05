import React, {useState} from 'react';
import mod from './ProductPage.module.sass';
import {NavLink, withRouter} from "react-router-dom";
import Specification from "./Specification/Specification";
import Reviews from "./Reviews/Reviews";
import {connect} from "react-redux";

const ProductPage = (props) => {

    let id = props.match.params.id;
    let productId = id - 1;
    let products = props.products;

    let [countValue, setCountValue] = useState(1);
    let [editMode, setEditMode] = useState(true);

    let minusCount = () => {
        setCountValue(--countValue);
    };

    let plusCount = () => {
        setCountValue(++countValue);
    };

    let changeSpecification = () => {
        setEditMode(true);
    };
    let changeReviews = () => {
        setEditMode(false);
    };
    let buttonEditMode1 = editMode ? `${mod.productSpecificationsButton1} ${mod.productSpecificationsRedButton}`
        : `${mod.productSpecificationsButton1}`;

    let buttonEditMode2 = !editMode ? `${mod.productSpecificationsButton2} ${mod.productSpecificationsRedButton}`
        : `${mod.productSpecificationsButton2}`;

    return (
        <div className={mod.productContainer}>
            <div className={mod.productAside}>
                <img src={props.navigation.asides[0].img} alt="aside"/>
            </div>
            <div className={mod.productBlocks}>
                <div className={mod.productPath}>Главная - Ноутбуки - Macbook</div>
                <div className={mod.productBlock}>
                    <div className={mod.productImages}>
                        <div className={mod.productMainImage}><img src={products[productId].imageMain} alt="product"
                                                                   title={products[productId].title}/></div>
                        <div className={mod.productImage}>
                            <div><img src={products[productId].imageMain} alt="product"
                                      title={products[productId].title}/></div>
                            <div><img src={products[productId].imageMain} alt="product"
                                      title={products[productId].title}/></div>
                            <div><img src={products[productId].imageMain} alt="product"
                                      title={products[productId].title}/></div>
                        </div>
                    </div>
                    <div className={mod.productDescription}>
                        <div className={mod.productTitle}>{products[productId].title}</div>
                        <div className={mod.productText}>{products[productId].text}
                        </div>
                        <div className={mod.productLevel}>stars</div>
                        <div className={mod.productPrice}>{products[productId].price}</div>
                        <div className={mod.productCount}>
                            <div className={mod.productCountTitle}>Количество</div>
                            <div className={mod.productCountNumber}>
                                <button onClick={minusCount}>-</button>
                                <input type="text" value={countValue}/>
                                <button onClick={plusCount}>+</button>
                            </div>
                        </div>
                        <div className={mod.productDescriptionButtons}>
                            <button className={mod.productDescriptionButton1}>В КОРЗИНУ</button>
                            <button className={mod.productDescriptionButton2}>БЫСТРЫЙ ЗАКАЗ</button>
                            <button className={mod.productDescriptionButton3}>
                                <img src={props.icons.scalesWhite} alt="scales" title='Добавить в сравнение'/>
                                <span>Добавить в сравнение</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={mod.productSpecifications}>
                    <div className={mod.productSpecificationsButtons}>
                        <NavLink className={buttonEditMode1}
                                 onClick={() => changeSpecification()}>ХАРАКТЕРИСТИКИ</NavLink>
                        <NavLink className={buttonEditMode2}
                                 onClick={() => changeReviews()}>ОТЗЫВЫ</NavLink>
                    </div>
                    {editMode && <Specification changeSpecification={changeSpecification}/>}
                    {!editMode && <Reviews changeReviews={changeReviews}/>}

                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        navigation: state.navigation.navigation,
        icons: state.icons.icons
    }
};

let WithRouterProductPage = withRouter(ProductPage);

export default connect(mapStateToProps)(WithRouterProductPage);