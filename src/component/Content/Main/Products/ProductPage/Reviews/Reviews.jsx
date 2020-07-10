import React, {useState} from 'react';
import mod from './Reviews.module.sass';
import {reduxForm} from "redux-form";
import {createFieldForm, Input, Textarea} from "../../../../../Form/FormsControl";
import {maxLength30, required} from "../../../../../../helpers/validators";

const ReviewsForm = ({handleSubmit, error}) => {

    let [isExist, setExist] = useState(false);

    let onSetExist = () => {
        setExist(!isExist);
    };

    return (
        <div>
            {isExist
                ?
                <div className={mod.reviews}>
                    <div className={mod.review}>
                        <form onSubmit={handleSubmit} className={mod.reviewForm}>
                            <div className={mod.advantages}>
                                {createFieldForm('Отметьте достоинства', 'Advantages', Textarea,
                                    [required], null, 'Достоинства')}
                            </div>
                            <div className={mod.shortcomings}>
                                {createFieldForm('Укажите замеченые недостатки', 'Shortcomings', Textarea,
                                    [required], null, 'Недостатки')}
                            </div>
                            <div className={mod.comments}>
                                {createFieldForm('Оставьте свой комментарий', 'Comments', Textarea,
                                    [required], null, 'Комментарий')}
                            </div>
                            <div className={mod.userName}>
                                {createFieldForm('Введите ваше имя', 'Name', Input,
                                    [required], null, 'Ваше Имя')}
                            </div>
                            <div className={mod.userEmail}>
                                {createFieldForm('Введите ваш e-mail', 'E-mail', Input,
                                    [required, maxLength30], null, 'Ваш E-mail')}
                            </div>
                            <button onClick={onSetExist}>Отправить</button>
                        </form>
                        <div className={mod.reviewTitle}>Отзывы</div>
                        <div className={mod.reviewText}>У этого товара нет ни одного отзыва. Вы можете стать первым.
                        </div>
                    </div>
                </div>
                : <div className={mod.reviews}>
                    <div className={mod.review}>
                        <div className={mod.reviewTitle}>Отзывы</div>
                        <div className={mod.reviewText}>У этого товара нет ни одного отзыва. Вы можете стать первым.
                        </div>
                    </div>
                    <button onClick={onSetExist}>НАПИСАТЬ ОТЗЫВ</button>
                </div>
            }
        </div>
    )
};

const Reviews = () => {

    return (
        <div>
            <ReviewReducerForm/>
        </div>
    )
};

const ReviewReducerForm = reduxForm({
    form: 'review'
})(ReviewsForm);

export default Reviews;