import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const CommentDetail = props => {
    return (
            <div className="comment">
                <a href="">
                    <img src={faker.image.avatar()} alt=""/>
                </a>
                <div className="content"><a href="" className="author">{props.author}</a>
                    <div className="metadata">
                        <div className="date text">{props.timeAgo}</div>
                        <div className="date text">{props.content}</div>
                    </div>
                </div>
            </div>

    )

};

export default CommentDetail;