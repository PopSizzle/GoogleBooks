import React, {useState, useEffect} from 'react';
import Jumbotron from "../components/Jumbotron/index";
import Container from "../components/Container/index"
import Card from "../components/Card/index"
import API from "../utils/API";


const Saved = () => {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    function loadBooks() {
        API.getBooks()
            .then((response) => {
                setSavedBooks(response);
                console.log(savedBooks);
            }).catch(err => console.log(err));
    }

    return (
        <div className="Saved">
            <Container>
                <Jumbotron />
            </Container>
            <Container>
            <Card />
            </Container>
        </div>
    );
}

export default Saved;
