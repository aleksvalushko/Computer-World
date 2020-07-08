import React from 'react';
import mod from './Pluses.module.sass';
import {Link} from "react-router-dom";

const Pluses = (props) => {

    let footerIcons = props.footer.footerIcons;

    return (
        <div className={mod.pluses}>
            <Link className={mod.item1}>
                <div className={mod.icon1}><img src={footerIcons[0]} alt="check"/></div>
                <div className={mod.textBlock1}>
                    <div className={mod.headline1}>ГАРАНТИЯ КАЧЕСТВА</div>
                    <div className={mod.text1}>Мы продаем сертифицированный товар с гаранитией сервисных центров.</div>
                </div>
            </Link>
            <Link className={mod.item2}>
                <div className={mod.icon2}><img src={footerIcons[1]} alt="like"/></div>
                <div className={mod.textBlock2}>
                    <div className={mod.headline2}>ЧЕСТНЫЕ ЦЕНЫ</div>
                    <div className={mod.text2}>Все цены, указанные на сайте, действительны и актуальны.</div>
                </div>
            </Link>
            <Link className={mod.item3}>
                <div className={mod.icon3}><img src={footerIcons[2]} alt="shield"/></div>
                <div className={mod.textBlock3}>
                    <div className={mod.headline3}>НАДЕЖНЫЙ СЕРВИС</div>
                    <div className={mod.text3}>Мы обеспечиваем установку, настройку, гарантийное и послегарантийное
                        обслуживание.
                    </div>
                </div>
            </Link>
            <Link className={mod.item4}>
                <div className={mod.icon4}><img src={footerIcons[3]} alt="smile"/></div>
                <div className={mod.textBlock4}>
                    <div className={mod.headline4}>ИНДИВИДУАЛЬНЫЙ ПОДХОД</div>
                    <div className={mod.text4}>Индивидуальный подход к каждому клиенту.</div>
                </div>
            </Link>
        </div>
    );
};

export default Pluses;