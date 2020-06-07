import React from 'react';
import mod from './Products.module.sass';
import PopularProductsBlock from "./PopularProductsBlock/PopularProductsBlock";
import {connect} from "react-redux";

const Products = (props) => {

    return (
        <div className={mod.products}>
            <div className={mod.title}>ПОПУЛЯРНЫЕ ТОВАРЫ</div>
            <div className={mod.mouse}><img src={props.icons.mouse} alt="mouse"/></div>
            <PopularProductsBlock state={props.state}/>
        </div>
    );
};

const mapStateToProps = (state) => {
  return {
      icons: state.icons.icons
  }
};

export default connect(mapStateToProps)(Products);