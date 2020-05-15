import React from "react";


function Container(props) {
    return (
        <div className="row justify-content-md-center col-md-8 col-sm-10">
            {props.children}
        </div>

    )
}

export default Container;