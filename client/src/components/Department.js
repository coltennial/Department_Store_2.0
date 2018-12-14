import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import styled from "styled-components";
import ItemCard from "./ItemCard";

class Department extends React.Component {
  state = { depart: {}, items: []} 

  componentDidMount() {
    const {department_id} = this.props.match.params;
    axios.get(`/api/departments/${department_id}`)
      .then( res => this.setState({ depart: res.data, }))
      axios.get(`/api/departments/${department_id}/items`)
        .then(res => this.setState({ items: res.data }))
        .catch( err => {
        })
  }

  renderItems = () => {
    return this.state.items.map( i => (
      <ItemCard key={i.id} { ...i } remove={this.removeItem} />
    ))
  }

  removeItem = (id) => {
    const remove = window.confirm("Would You Like to Remove This Item From This Department?");
    const dId = this.props.match.params.department_id;
    if (remove)
      axios.delete(`/api/departments/${dId}/items/${id}`)
        .then( res => {
          const items = this.state.items.filter( i => {
            if (i.id !== id)
            return i;
          })
          this.setState({ items })
        })
  }

  handleDelete = (id) => {
    const remove = window.confirm("Are you sure you want to DEMOLISH this department?")
    if (remove)
      axios.delete(`/api/departments/${id}`)
        .then( res => this.props.history.push("/departments"))
  }

  render() {
    const { depart: {id, name} } = this.state
    return (
      <div>
        
        <h1> {name} </h1>
        <Buttons>
            <Link to={`/departments/${id}/edit`} style={{ textDecoration: "none"}}>
                <ButStyle1> Edit Department Name </ButStyle1>
            </Link>

            <ButStyle2 onClick={() => this.handleDelete(id)}> Remove Department </ButStyle2>

            <Link to={`/departments/${id}/items/new`} style={{ textDecoration: "none"}}>
              <ButStyle3> Add Item To Department </ButStyle3>
            </Link>
          </Buttons>

          <DepItems>
            {this.renderItems()}
          </DepItems>
      </div>
    )
  }
}

export default Department

// STYLES 



const DepItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1rem;
  width: 80%;
  margin: 10% auto;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: -5%;
`;

const ButStyle1 = styled.p`
display: flex;
align-items: center;
justify-content: center;
width: 200px;
height: 50px;
background-color: #a2e;
color: black;
transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;
  
&:hover {
  border: 2px outset #555;
  background-color: #eee;
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
`;

const ButStyle2 = styled.p`
display: flex;
align-items: center;
justify-content: center;
width: 200px;
height: 50px;
background-color: #d25;
color: black;
transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;
  
&:hover {
  border: 2px outset #555;
  background-color: #eee;
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
`;

const ButStyle3 = styled.p`
display: flex;
align-items: center;
justify-content: center;
width: 200px;
height: 50px;
background-color: #0af;
color: black;
transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;
  
&:hover {
  border: 2px outset #555;
  background-color: #eee;
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
`;

const Item = styled.p`
  
`;