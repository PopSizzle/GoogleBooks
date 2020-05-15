import React from 'react';
import Jumbotron from "../components/Jumbotron/index";
import Container from "../components/Container/index"
import Card from "../components/Card/index"

const Saved = () => {

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
