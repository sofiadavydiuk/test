import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <>
        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:25PM" content="Nice blog post"/>
            </ApprovalCard>
            <ApprovalCard/>

            <ApprovalCard>
                This is just text )
                Are you shure you want to add it?
            </ApprovalCard>

            <CommentDetail author="Sam" timeAgo="Today at 4:35PM" content="Nice blog post"/>
            <CommentDetail author="Sam" timeAgo="Today at 4:85PM" content="Nice blog post"/>
            <CommentDetail author="Sam" timeAgo="Today at 4:95PM" content="Nice blog post"/>
        </div>
    </>
    )
}
export default App;