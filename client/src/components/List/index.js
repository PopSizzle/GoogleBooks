import React from "react";
import Card from "../Card/index"


function List(...props) {

    return (props.map(book => {
        <Card book={book} />
    })
    

}

export default List;