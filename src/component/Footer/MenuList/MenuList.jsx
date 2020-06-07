import React from 'react';
import mod from './MenuList.module.sass';
import Information from "./Information/Information";
import Catalog from "./Catalog/Catalog";
import Subscription from "./Subscription/Subscription";

const MenuList = (props) => {
    return (
        <div className={mod.menuList}>
            <Information footer={props.footer.information}/>
            <Catalog footer={props.footer.catalog}/>
            <Subscription />
        </div>

    );
};

export default MenuList;