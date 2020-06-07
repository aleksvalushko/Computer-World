import React from 'react';
import './App.sass';
import {Route} from "react-router-dom";
import Header from "./component/Header/Header";
import Navigation from "./component/Navigation/Navigation";
import Products from "./component/Content/Main/Products/Products";
import News from "./component/Content/Main/News/News";
import Footer from "./component/Footer/Footer";
import ProductPage from "./component/Content/Main/Products/ProductPage/ProductPage";

const App = (props) => {

    return (
        <div className='appWrapper'>
            <Header />
            <Route path='/ContentPage' render={()=>
                <div className='content'>
                    <Navigation />
                    <Products />
                    <News state={props.state}/>
                </div>
            }/>
            <Route path='/ProductPage/:id?' render={()=><ProductPage />}/>
            <Footer />
        </div>);
};
export default App;