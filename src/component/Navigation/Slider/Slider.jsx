import React, {useState} from 'react';
import mod from './Slider.module.sass';
import {connect} from "react-redux";

const Slider = (props) => {

    let slide = props.navigation.slides,
        icons = props.icons;

    let [index, setIndex] = useState(0);

    let changeSlideForward = () => {
        if (index >= 0 && index < slide.length - 1) {
            setIndex(++index);
        } else {
            setIndex(0);
        }
    };
    let changeSlideBack = () => {
        if (index < slide.length && (index !== 0)) {
            setIndex(--index);
        } else {
            setIndex(slide.length - 1);
        }
    };

    return (
        <div className={mod.slider}>
            <img src={slide[index].image} alt={`${slide[index].text}`}/>
            <span className={mod.text}>{slide[index].text}</span>
            <button className={mod.arrowLeft} onClick={changeSlideBack}>
                <img src={icons.arrowLeftSlider} alt="arrowLeft"/></button>
            <button className={mod.arrowRight} onClick={changeSlideForward}>
                <img src={icons.arrowRightSlider} alt="arrowRight"/></button>
        </div>);
};

const mapStateToProps = (state) => {
    return {
        navigation: state.navigation.navigation,
        icons: state.icons.icons
    }
};

export default connect(mapStateToProps)(Slider);