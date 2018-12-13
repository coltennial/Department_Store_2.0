import React from 'react';
import styled from "styled-components";

const ItemCard = ({ id, name, price, remove}) => (
  <Item>
    <div>
      <h2> {name} </h2>
      <p> ${price} </p>
    </div>

    <BttnStyle>
      <button> Edit </button>
      <button onClick={() => remove(id)}> Remove </button>
    </BttnStyle>
  </Item>
)

export default ItemCard;

// STYLES 

const Item = styled.div`
display: flex;
flex-direction: column;
border: 1px solid white;
padding: 2%;
margin-top: 5%;
`;

const BttnStyle = styled.div`
  
`;