import React from 'react';
import NavBar from "../components/NavBar/index";
import Jumbotron from "../components/Jumbotron/index";
import Container from "../components/Container/index"
import Card from "../components/Card/index"
import SearchBar from "../components/SearchBar/index"

const Search = () => {

    return (
        <div className="Search">
            <Container>
                <Jumbotron />
            </Container>
            <Container>
                <SearchBar />
            </Container>
            <Container>
            <Card />
            </Container>
        </div>
    );
}

export default Search;
