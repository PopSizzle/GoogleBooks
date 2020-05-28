# Books API

Live site: 
https://mysterious-reef-15813.herokuapp.com/

## Description

This book search allows a user to search books from the Google API. They can then save them to a favorites list, view more details, or delete them from the favorites list. Both the search and save functions are made to be user-friendly and intuitive.

## Table of Contents

  * [Technology](#Technology)

  * [Learning-Points](#Learning-Points)
  
  * [Installation](#Installation)

  * [Code-Snippets](#Code-Snippets)
  
  * [Authors](#Authors)

  * [Contributing](#Contributing)

## Technologies Used

- MongoDB - used to create a simple database for storage and retrieval using API calls
- Express - framework for Node.js to create a server
- React.js - frontend javascript framework
- Node.js - used for various backend duties
    Associated Node dependencies:
    - nodemon
    - concurrently
    - axios
    - mongoose

- HTML - used to create elements on the DOM
- CSS - used to add style to the deployed page
- JavaScript - used to create the logic controlling the client-side application

- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Heroku - host for deployed application

## Learning-Points

The Books API is a full MERN app, combining MongoDB, Express.js, React.js, and Node.js. The storage is all saved to the mongo databse, which is being hosted on Heroku along with the frontend app. API calls are made to mongo to retrieve saved information and bring it back to the frontend to display to the user.

## Installation

In order to use our app, a user will just need to open it via the Heroku link. In order to edit it, a developer would need to install all of the associated dependencies on their local machine.

## Code-Snippets

An example of our app.js setup, showing all of our React components:

```
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
          <NavBar />
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    </Router>
  );
}
```

Here is the code that we used to load the favorite books list utilizing local state:

```
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
```

## GIF Demo

![Site](assets\Google Books - Class Project.gif)

## Authors

If you have any questions about the repository, feel free to contact the authors on Githhub:

Sam Poppe
https://github.com/PopSizzle

Ana Medrano
https://github.com/analoo

Michael Downs
https://github.com/chindowns

## Contributing

Jerome Chenette, Kerwin Hy, Mahi Gunasekaran





