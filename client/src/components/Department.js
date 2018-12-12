import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import styled from "styled-components";
import ItemCard from "./ItemCard";

class Department extends React.Component {
  state = { depart: {}, items: []} 

  componentDidMount() {
    const {id} = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then( res => this.setState({ depart: res.data, }))
      axios.get(`/api/departments/${id}/items`)
        .then(res => this.setState({ items: res.data }))
        .catch( err => {
          debugger
        })
  }

  renderItems = () => {
    return this.state.items.map( i => (
      <ItemCard key={i.id} { ...i } remove={this.removeItem} />
    ))
  }

  removeItem = (id) => {
    const remove = window.confirm("Would You Like to Remove This Item From This Department?");
    const dId = this.props.match.params.id;
    if (remove)
      axios.delete(`/api/departments/${dId}/items/${id}`)
        .then( res => {
          const items = this.state.items.filter( i => {
            if (i.id !== id)
            return i;
          })
          this.setState({ items})
        })
  }

  handleDelete = (id) => {
    const remove = window.confirm("Are you sure you want to DEMOLISH this department?")
    if (remove)
      axios.delete(`/api/departments/${id}`)
        .then( res => this.props.history.push("/departments"))
  }

  render() {
    const { depart: {id, name, price} } = this.state
    return (
      <div>
        <Buttons>
        <h1>{ name }</h1>
            <Link to={`/departments/${id}/edit`}>
                <ButStyle> Edit Department Name </ButStyle>
            </Link>

            <ButStyle onClick={() => this.handleDelete(id)}> Remove Department </ButStyle>

            <Link to={`/departments/${id}/items/new`}>
              <ButStyle> Add Item To Department </ButStyle>
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
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1rem;
  width: 80%;
  margin: 10% auto;
`;

const Buttons = styled.div`

`;

const ButStyle = styled.button`

`;

const Item = styled.p`
  
`;