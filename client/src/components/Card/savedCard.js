import React from "react";
import "./card.css"
import API from "../../utils/API";


function SavedCard(prop) {
  let props = prop.data;
  console.log(props.link);
  function deleteCard(id) {
    API.deleteBook(id)
      .then(res => {
          console.log(res)
        window.location.reload();
        })
      .catch(err => console.log(err))
  }


  return (
      <div className="card">
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Authors: {props.authors}</p>
                <a type="button" href={props.link} target="_blank" className="btn btn-primary">View</a>
                <button className="btn btn-primary" id={props._id} onClick={() => deleteCard(props._id)}>Delete</button>

          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img src={props.image} className="card-img-left" alt="..." />
                <br/>
               
              </div>
              <div className="col-md-8">
               
                <p className="card-text">Description: {props.description}</p>
                <p className="card-text">Pages: {props.pageCount}</p>
                <p className="card-text">Rating: {props.rating}</p>
                
                <p className="card-text">Published: {props.publishedDate}</p>
                <p className="card-text">Category: {props.categories}</p>
              </div>

            </div>
          </div>



        </div>
      </div>
  )
}

export default SavedCard;
