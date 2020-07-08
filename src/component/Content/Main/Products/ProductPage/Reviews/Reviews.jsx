import React, {useState} from 'react';
import mod from './Reviews.module.sass';
import {reduxForm} from "redux-form";

const Reviews = () => {

    let [isExist, setExist] = useState(false);

    return (
        <div>
            {isExist
                ? <ReviewsForm/>
                : <div className={mod.reviews}>
                    <div className={mod.review}>
                        <div className={mod.reviewTitle}>Отзывы</div>
                        <div className={mod.reviewText}>У этого товара нет ни одного отзыва. Вы можете стать первым.</div>
                    </div>
                    <button>НАПИСАТЬ ОТЗЫВ</button>
                </div>
            }
        </div>
    )
};

const ReviewsForm = () => {
  return (
      <div>

      </div>
  )
};

const reviewReducerForm = reduxForm({
    form: 'review'
})(ReviewsForm);

export default Reviews;