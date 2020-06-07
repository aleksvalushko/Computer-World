import React from 'react';
import mod from './Reviews.module.sass';

const Reviews = () => {

    return (
        <div className={mod.reviews}>
            <div className={mod.review}>
                <div className={mod.reviewTitle}>Отзывы</div>
                <div className={mod.reviewText}>У этого товара нет ни одного отзыва. Вы можете стать первым.</div>
            </div>
            <button>НАПИСАТЬ ОТЗЫВ</button>
        </div>
    )
};

export default Reviews;