import React from 'react';
import mod from './PopularProductsBlock.module.sass';
import PopularProducts from "./PopularProducts/PopularProducts";
import ProductPage from "../ProductPage/ProductPage";
import {Route} from "react-router-dom";

const PopularProductsBlock = (props) => {
    return (
        <div className={mod.popularProductBlock}>
            <Route path='/ContentPage' render={ () => <PopularProducts state={props.state}/>}/>
            <Route path='/ProductPage/:id?' render={ () => <ProductPage state={props.state} />}/>
        </div>)
};

export default PopularProductsBlock;