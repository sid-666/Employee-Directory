import React from "react";

function Container(props) {
    return (
        <div className="main">
            {props.children}
        </div>
    )
}

export default Container;