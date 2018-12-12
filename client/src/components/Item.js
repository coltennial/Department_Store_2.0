import React from "react";
import axios from 'axios';
import ItemForm from "./ItemForm";

class Item extends React.Component {


  componentDidMount() {
    let {id} = this.props
    axios.get(`/api/departments/${id}/items`)
      .then(res => {
        this.setState({ 
          items: res.data 
        })
      })
  }

    deleteItem = (department_id, id) => {
    axios.delete(`/api/departments/${department_id}/items/${id}`)
    .then( res => {
      const {items} = this.state;
      this.setState({
        items: items.filter(item =>
          item.id !== id)
      })
    })
  }

  render() {
    return( 
      <ItemForm {...this.props} /> 
    )
  }
};

export default Item;