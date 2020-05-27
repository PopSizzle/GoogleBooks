import React from "react";
import "./container.css"


function Container(props) {
    return (
        <div className="row justify-content-md-center col-md-8 col-sm-10 main-container">
            {props.children}
        </div>

    )
}

export default Container;