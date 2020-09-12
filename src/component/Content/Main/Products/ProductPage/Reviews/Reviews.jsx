import React, {useState} from 'react';
import mod from './Reviews.module.sass';
import {reduxForm} from "redux-form";
import {createFieldForm, Input, Textarea} from "../../../../../Form/FormsControl";
import {maxLength30, required} from "../../../../../../helpers/validators";
import {connect} from "react-redux";
import {addComment} from "../../../../../../redux/productsReducer";
import Comment from "./Comment";
import Comments from "./Comments";

const ReviewsForm = ({handleSubmit, error}) => {

    return (
        <div>
            <div className={mod.reviews}>
                <div className={mod.review}>
                    <form onSubmit={handleSubmit} className={mod.reviewForm}>
                        <div>
                            {createFieldForm('Отметьте достоинства', 'Advantages', Textarea,
                                [required], null, 'Достоинства')}
                        </div>
                        <div>
                            {createFieldForm('Укажите замеченые недостатки', 'Shortcomings', Textarea,
                                [required], null, 'Недостатки')}
                        </div>
                        <div>
                            {createFieldForm('Оставьте свой комментарий', 'Comment', Textarea,
                                [required], null, 'Комментарий')}
                        </div>
                        <div>
                            {createFieldForm('Введите ваше имя', 'Name', Input,
                                [required], null, 'Ваше Имя')}
                        </div>
                        <div>
                            {createFieldForm('Введите ваш e-mail', 'E-mail', Input,
                                [required, maxLength30], null, 'Ваш E-mail')}
                        </div>
                        <button>ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

const Reviews = (props) => {

    let comments = props.products.map(el => <Comments comments={el.comments}/>);
    let [isExist, setExist] = useState(true);

    let onSetExist = () => {
        setExist(!isExist);
    };

    let addNewComment = (values) => {
        props.addNewComment(values.Name, values.Comment);
        setExist(!isExist);
    };

    return (
        <div>
            {isExist
                ? <div className={mod.newReview}>
                    <div className={mod.newReviewBlock}>
                        <div className={mod.newReviewTitleBlock}>
                            <div className={mod.newReviewTitle}>Отзывы</div>
                            <div className={mod.newReviewTitleText}>У этого товара нет ни одного отзыва. Вы можете стать
                                первым.
                            </div>
                        </div>
                        <button onClick={onSetExist}>НАПИСАТЬ ОТЗЫВ</button>
                    </div>
                    <div>{comments}</div>
                </div>
                : <div>
                    <ReviewReducerForm onSubmit={addNewComment}/>
                </div>}
        </div>
    )
};

const ReviewReducerForm = reduxForm({
    form: 'review'
})(ReviewsForm);

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewComment: (name, comment) => {
            dispatch(addComment(name, comment));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);