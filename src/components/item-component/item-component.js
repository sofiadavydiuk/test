import React from "react";
import {Image, Item} from "semantic-ui-react";

export const ItemComp = ({ image, description, title }) => (
  <Item>
    <Item.Image size="small" src={image}/>
    <Item.Content>
      <Item.Header>{title}</Item.Header>
      <Item.Meta>{description}</Item.Meta>
      <Item.Description>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"/>
      </Item.Description>
      <Item.Extra>More</Item.Extra>
    </Item.Content>
  </Item>
);
