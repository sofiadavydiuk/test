import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchCompanies from "./FetchCompanies";
import {Input, Header, Container, Segment, Search} from 'semantic-ui-react';
import MapExample from "./MapExample";

const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
      <div className="App">
          <Search />
        <header className="App-header">
          <Input placeholder='Search...' />


            <FetchCompanies />


          <MapExample numbers={numbers} />
          <img src={logo} className="App-logo" alt="logo" />

        </header>

      </div>
  );
}

export default App;

// To do:
// 1) map of companies
// 2) redairect with one company info
// 3) styles
// 4) filtry
// 5) github
// 6) trello