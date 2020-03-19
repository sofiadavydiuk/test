import React, {useState} from 'react';
import './App.css';

import {connect} from 'react-redux';
import {Container, Item, Search} from 'semantic-ui-react'

import { ItemComp } from './components';

const App = ({source}) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <div>
      <div className="app__header">
        <Search
          className="app__search"
          onSearchChange={(e) => setSearchPhrase(e.target.value)}
        />
      </div>
      <div>
        <Container>
          <Item.Group>
            {
              source.items
                .filter((elem) =>
                  elem.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
                  elem.description.toLowerCase().includes(searchPhrase.toLowerCase()))
                .map(({id, ...props}) => (
                  <ItemComp key={id} {...props} />
                ))
            }
          </Item.Group>
        </Container>
      </div>
    </div>
  )
};

const mapStateToProps = ({source}) => ({
  source,
});

export default connect(mapStateToProps)(App);
