import React from 'react';
import axios from "axios";

class ItemForm extends React.Component {
  state = {
    name: "",
    price: "",
  };

  componentDidMount() {
    const { id, itemId } = this.props.match.params; 
    if (itemId)
      axios.get(`/api/departments/${id}/items/$(itemId)`)
        .then( res => this.setState({ ...res.data }))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { match: {params: {id, itemId}}, history: {push}} = this.props
    if (itemId) {
      axios.put(`/api/departments/${id}/items/${itemId}`, {...this.state})
        .then( res => push(`/departments/${id}`))
    } else {
      axios.post(`/api/departments/${id}/items`, {...this.state })
      .then( res => push(`/departments/${id}`))
    } 
  }

  render() {
    const { id, itemId } = this.props.match.params; 
    const {name, price} = this.state
    return (
      <div>
        <h1> { itemId ? "Edit Item" : "Add Item"} </h1>
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