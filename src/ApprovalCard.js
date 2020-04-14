import React from "react";

const ApprovalCard = props => {
    console.log(props.children)
    return(
       <div className="ui card">
           {props.children}
            <div className="ui card">Are you sure?</div>
       </div>
    )
}
export default ApprovalCard;