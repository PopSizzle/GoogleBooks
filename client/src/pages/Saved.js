import React, { useState, useEffect } from 'react';
import Jumbotron from "../components/Jumbotron/index";
import Container from "../components/Container/index"
import Card from "../components/Card/index"
import List from "../components/List/index"
import API from "../utils/API";


const Saved = () => {
    const [savedBooks, setSavedBooks] = useState([]);

    

    function loadBooks() {
        API.getBooks()
            .then((response) => {
                setSavedBooks(response);
                console.log(savedBooks);
            }).catch(err => console.log(err));
    }

    useEffect(() => {
        loadBooks();
    }, []);

    return (
        <div className="Saved">
            <Container>
                <Jumbotron />
            </Container>
            <List>
                {savedBooks.map(book => {
                    return (
                        <Card key={book} />
                    )
                })}
            </List>
        </div>
    );
}

export default Saved;
