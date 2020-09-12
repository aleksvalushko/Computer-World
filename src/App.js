import React from 'react';
import './App.sass';
import {Route} from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import ProductPage from "./component/Content/Main/Products/ProductPage/ProductPage";
import Content from "./component/Content/Content";

const App = () => {

    return (
        <div className='appWrapper'>
            <Header/>
            <Route path='/' exact render={() => <Content/>}/>
            <Route path='/ProductPage/:id?' render={() => <ProductPage/>}/>
            <Footer/>
        </div>);
};
export default App;

// с версией react-router-dom выше, чем 5.0.0, возникает проблема с роутами