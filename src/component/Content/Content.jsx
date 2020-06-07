import React from 'react';
import Navigation from "../Navigation/Navigation";
import News from "./Main/News/News";
import Products from "./Main/Products/Products";

const Content = () => {

    return (
        <div className='content'>
            <Navigation/>
            <Products/>
            <News/>
        </div>
    );
};


export default Content;