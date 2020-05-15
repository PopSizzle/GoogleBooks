import React, { useState, useEffect } from 'react';
import Jumbotron from "../components/Jumbotron/index";
import Container from "../components/Container/index"
import Card from "../components/Card/index"
import List from "../components/List/index"
import API from "../utils/API";

const Search = () => {
    const [books, setBooks] = useState([]);
    const [searchObject, setSearchObject] = useState({});

    useEffect(() => {
        this.loadBooks("harrypotter");
    }, []);

    function loadBooks(search) {
        API.getGoogleBooks(search)
            .then((response) => {
                setBooks(response.items);
                console.log(books);
            }).catch(err => console.log(err));
    }

    const handleSubmit = function (e) {
        e.preventDefault();
        loadBooks(searchObject);
        setSearchObject("");
    }

    return (
        <div className="Search">
            <Container>
                <Jumbotron />
            </Container>
            <Container>
                <form onSubmit={handleSubmit}>
                    <input className="form-control form-control-lg" type="search" placeholder=".form-control-lg" onChange={(e) => setSearchObject(e.target.value)} />
                </form>
            </Container>
            <Container>
                <List>
                    {books.map(book => {
                        return (
                            <Card key={book} />
                        )
                    })}
                </List>
            </Container>
        </div>
    );
}

export default Search;
