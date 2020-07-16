import React from "react";
import Comment from "./Comment";

const Comments = (props) => {

    let comment = props.comments.map( el => <Comment name={el.name} comment={el.comment}/>);

    return (
        <div>{comment}</div>
    )
};

export default Comments;