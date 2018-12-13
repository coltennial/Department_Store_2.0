import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemCard = ({ id, name, price, remove, department_id, itemId}) => (
  <Item>
    <div>
      <h2> {name} </h2>
      <p> ${price} </p>
    </div>

    
      <BttnStyle>
        <Link to={`/departments/${department_id}/items/${id}/edit`}>
          <button> Edit </button>
        </Link>
        <button onClick={() => remove(id)}> Remove </button>
        <Link to={`/departments/${id}/items/${itemId}`}>
          <button > Review </button>
        </Link>
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