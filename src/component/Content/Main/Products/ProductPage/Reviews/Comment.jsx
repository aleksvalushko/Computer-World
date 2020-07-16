import React from "react";
import mod from './Reviews.module.sass';

const Comment = (props) => {

    return (
        <div className={mod.reviewComments}>
            <div className={mod.authorName}>{props.name}</div>
            <div className={mod.comment}>{props.comment}</div>
        </div>
    )
};

export default Comment;