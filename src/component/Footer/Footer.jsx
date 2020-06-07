import React from 'react';
import mod from './Footer.module.sass';
import MenuList from "./MenuList/MenuList";
import Pluses from "./Pluses/Pluses";
import OperationMode from "./OperationMode/OperationMode";
import {connect} from "react-redux";

const Footer = (props) => {
    return (
        <div className={mod.footer}>
            <MenuList footer={props.footer}/>
            <Pluses footer={props.footer}/>
            <OperationMode footer={props.footer}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
           footer: state.footer.footer
    }
};

export default connect(mapStateToProps)(Footer);