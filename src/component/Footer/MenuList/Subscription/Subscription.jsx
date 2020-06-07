import React from 'react';
import mod from './Subscription.module.sass';

const Subscription = () => {
    return (
        <div className={mod.subscription}>
            <div className={mod.title}>АКЦИИ И СКИДКИ</div>
            <input type="text" placeholder='E-mail*'/>
            <button>ПОДПИСАТЬСЯ</button>
        </div>
    );
};

export default Subscription;