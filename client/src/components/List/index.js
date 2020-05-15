import React from "react";
import Card from "../Card/index"


function List({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    )
}

export default List;