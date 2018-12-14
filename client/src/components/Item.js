import React from "react";
import axios from "axios";

class Item extends React.Component {
  state = {item: {}, reviews: []};

  componentDidMount() {
    const { url } = this.props.match
    axios.get(`/api/${url}`)
      .then( res => this.setState({ items: res.data }))
    axios.get(`/api/items/${this.props.match.params.id}/reviews`)
      .then( res => this.setState({ reviews: res.data}))
  }

  renderReviews = () => {
    return this.state.reviews.map( r => (
      <div>
        <p> {r.rating} </p>
        <h4> {r.title} </h4>
        <h5> {r.author} </h5>
        <p> {r.body} </p>
      </div>
    ))
  }


  render() {
    const { name, price, } = this.state.item;

    return( 
      <div>
        <h1> {name} </h1>
        <p> {price} </p>

        <div>
          <h1> Reviews</h1>
          { this.renderReviews() }
        </div>
      </div>
    )
  }
};

export default Item;