import React, {useState} from 'react';
import './App.css';

import {Container, Image, Item, Search} from 'semantic-ui-react'

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
              source
                .filter((elem) =>
                  elem.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
                  elem.description.toLowerCase().includes(searchPhrase.toLowerCase()))
                .map((elem) => (
                  <Item key={elem.title + elem.description}>
                    <Item.Image size="small" src={elem.image}/>
                    <Item.Content>
                      <Item.Header>{elem.title}</Item.Header>
                      <Item.Meta>{elem.description}</Item.Meta>
                      <Item.Description>
                        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"/>
                      </Item.Description>
                      <Item.Extra>More</Item.Extra>
                    </Item.Content>
                  </Item>
                ))
            }
          </Item.Group>
        </Container>
      </div>
    </div>
  )
};

export default App;
