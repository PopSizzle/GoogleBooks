import React from "react";
import "./card.css"
import API from "../../utils/API";



function Card(prop) {
  let props = prop.data;
  let image;

  if (props.imageLinks) {
    image = props.imageLinks.thumbnail
  }
  else{
    image="#"
  }

  let card = {
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: image,
    link: props.previewLink,
    publishedDate: props.publishedDate,
    rating: props.averageRating,
    categories: props.categories,
    pageCount: props.pageCount
  }


  function addCard() {
    API.saveBook(card)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Authors: {props.authors}</p>
        <a type="button" href={props.previewLink} target="_blank" className="btn btn-primary">View</a>
        <button className="btn btn-primary" onClick={() => addCard()}>Add</button>

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={image} className="card-img-left" alt="..." />
              <br />

            </div>
            <div className="col-md-8">

              <p className="card-text">Description: {props.description}</p>
              <p className="card-text">Pages: {props.pageCount}</p>
              <p className="card-text">Rating: {props.averageRating}</p>

              <p className="card-text">Published: {props.publishedDate}</p>
              <p className="card-text">Category: {props.categories}</p>
            </div>

          </div>
        </div>



      </div>
    </div>
  )
}

export default Card;
