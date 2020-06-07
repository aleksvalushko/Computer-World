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
            <Route path='/ContentPage' render={() => <Content/>}/>
            <Route path='/ProductPage/:id?' render={() => <ProductPage/>}/>
            <Footer/>
        </div>);
};
export default App;