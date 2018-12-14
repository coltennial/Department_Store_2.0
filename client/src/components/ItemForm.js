import React from 'react';
import axios from "axios";

class ItemForm extends React.Component {
  state = {
    name: "",
    price: "",
  };

  componentDidMount() {
    const { department_id, id } = this.props.match.params; 
    if (id)
      axios.get(`/api/departments/${department_id}/items/${id}`)
      .then( res => {
          const { name, price } = res.data
          this.setState({ name, price })
  })
    .catch( err => {
      console.log( err.response)
    })
}

// /api/departments/:department_id/items/:id

// componentDidMount() {
//   if (this.props.match.paramsi)
//     axios.get(`/api/departments/${this.props.match.params.ii}}`)
//       .then( res => this.setState({ ...res.data }))
// }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { match: {params: {department_id, id}}, history: {push}} = this.props
    if (id) {
      axios.put(`/api/departments/${department_id}/items/${id}`, {...this.state})
        .then( res => push(`/departments/${department_id}`))
    } else {
      axios.post(`/api/departments/${department_id}/items`, {...this.state })
      .then( res => push(`/departments/${department_id}`))
    } 
  }

  render() {
    const { id, department_id } = this.props.match.params; 
    const {name, price} = this.state
    return (
      <div>
        <h1> { id ? "Edit Item" : "Add Item"} </h1>
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
          <button>Add Item</button>
        </form>
      </div>
    )
  }
}

export default ItemForm;