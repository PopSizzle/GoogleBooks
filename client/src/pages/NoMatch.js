import React from 'react';
import Jumbotron from "../components/Jumbotron/index";
import Container from "../components/Container/index"

const NoMatch = () => {
    return (
        <Container>
            <Jumbotron>
                <h1>404 Page Not Found</h1>
                <h1>
                    <span role="img" aria-label="Face With Rolling Eyes Emoji">
                        🙄
                    </span>
                </h1>
            </Jumbotron>
        </Container>
    );
};

export default NoMatch;
