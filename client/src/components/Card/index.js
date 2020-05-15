import React from "react";


function Card(props) {
    return (
      <li>
        <div className="card">
        <img src={props.image} className="card-img-left" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Authors: {props.authors}</p>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">#: {props.pageCount}</p>
          <p className="card-text">Rating: {props.rating}</p>
          <a href={props.link} className="btn btn-primary">Link</a>
          {/* <a class="btn btn-primary" href="" role="button">Favorite</a> */}
          <p className="card-text">Published: {props.publishedDate}</p>
          <p className="card-text">Categories: {props.categories}</p>
        </div>
      </div>
      </li>
    )
}

export default Card;
