import React, { useState, useEffect } from 'react';
import Jumbotron from "../components/Jumbotron/index";
import Container from "../components/Container/index"
import SavedCard from "../components/Card/savedCard"
import API from "../utils/API";


function Saved(){
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    function loadBooks() {
        API.getBooks()
            .then((response) => {
                setSavedBooks(response.data);
            }).catch(err => console.log(err));
    }

  
    return (
        <div className="Saved">
            <Container>
                <Jumbotron />
                {savedBooks.map(book => {
                    return (
                        <SavedCard data={book} key={book._id} />
                    )
                })}
            </Container>
        </div>
    );
}

export default Saved;
