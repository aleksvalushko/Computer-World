import React from 'react';
import {connect} from "react-redux";
import PopularProduct from "./PopularProduct/PopularProduct";

const PopularProducts = (props) => {

    let popularProducts = props.products;

    return (
        popularProducts.map(el => {
            return <PopularProduct product={el}/>
        }))
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
};

export default connect(mapStateToProps)(PopularProducts);