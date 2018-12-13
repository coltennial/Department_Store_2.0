import React from "react";
import axios from "axios";

class Item extends React.Component {
  state = {item: {}, reviews: []};

  componentDidMount() {
    const { url } = this.props.match
    // axios.get(`/api/${this.props.match.id}`)
    //   .then( res => this.setState({ ...res.data }))
    axios.get(`/api/${url}`)
      .then( res => this.setState({ ...res.data }))
  }


  render() {
    const { name, price, } = this.state.item;

    return( 
      <div>
        <h1> {name} </h1>
        <p> {price} </p>
      </div>
    )
  }
};

export default Item;