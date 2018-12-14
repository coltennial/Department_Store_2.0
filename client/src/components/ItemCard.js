import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemCard = ({ id, name, price, remove, department_id}) => (
  <Item>
    <div>
      <h2> {name} </h2>
      <p> ${price} </p>
    </div>

    
      <BttnStyle>
      <Link to={`/departments/${department_id}/items/${id}`}>
          <button > Review </button>
        </Link>

        <Link to={`/departments/${department_id}/items/${id}/edit`}>
          <button> Edit </button>
        </Link>

        <button onClick={() => remove(id)}> Remove </button>
       
      </BttnStyle>
  </Item>
)

export default ItemCard;

// STYLES 

const Item = styled.div`
display: flex;
flex-direction: column;
text-wrap: wrap;
padding: 2%;
margin-top: 5%;
background-color: #eee;
color: black;
min-width: 300px;
max-width: 300px;
`;

const BttnStyle = styled.div`
  
`;