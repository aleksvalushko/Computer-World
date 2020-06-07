import button1 from "../icons/eyeWhite.svg";
import button2 from "../icons/scalesWhite.svg";
import button3 from "../icons/basketWhite.svg";
import button4 from "../icons/leftUpArrowWhite.svg";
import mouse from "../icons/mouse.svg";
import logo from "../icons/logo.jpg";
import mts from "../icons/mts.png";
import mail from "../icons/mail.png";
import login from "../icons/login.png";
import arrowDown from "../icons/arrowDown.png";
import arrowRightSlider from "../icons/arrowRightWhite.png";
import arrowLeftSlider from "../icons/arrowLeftWhite.png";
import arrowRightRed from "../icons/arrowRight.png";
import search from "../icons/magnifierWhite.svg";
import scales from "../icons/scales.svg";
import scalesWhite from '../icons/scalesWhite.svg';
import basket from "../icons/basket.svg";
import menu from "../icons/menu1.0.png";

let initState = {
    icons: {
        buttons: [button1, button2, button3, button4],
        mouse: mouse,
        logo: logo,
        mts: mts,
        mail: mail,
        login: login,
        arrowDown: arrowDown,
        arrowRightSlider: arrowRightSlider,
        arrowLeftSlider: arrowLeftSlider,
        arrowRightRed: arrowRightRed,
        search: search,
        scales: scales,
        scalesWhite: scalesWhite,
        basket: basket,
        menu: menu

    }
};

const iconsReducer = (state = initState) => {
  return state;
};

export default iconsReducer;