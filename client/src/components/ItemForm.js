import React from 'react';
import axios from "axios";

class ItemForm extends React.Component {
  state = {
    name: "",
    price: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params
    axios.post(`/api/departments/${id}/items`, {...this.state })
    .then( res => this.props.history.push(`/departments/${id}`))
  }

  render() {
    const {name, price} = this.state
    return (
      <div>
        <h1> Add Item To Department </h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            name="name"
            placeholder="Name"
            label="Name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <input 
            name="price"
            placeholder="Price:"
            label="Price"
            value={price}
            required
            onChange={this.handleChange}
          />
          <button className="submit">Add Item</button>
        </form>
      </div>
    )
  }
}

export default ItemForm;