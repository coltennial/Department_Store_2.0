import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import styled from "styled-components";

class Departments extends React.Component {
  state = { departs: [], };

  componentDidMount() {
    axios.get("/api/departments")
    .then( res => {
      this.setState({ departs: res.data, })
    })
    .catch( err => {
      debugger
    })
  }

  renderDepartments = () => {
    return this.state.departs.map( d => (
      <div key={d.id}>
      <Link to={`/departments/${d.id}`}>
        <li>{d.name}</li>
      </Link>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1> Departments </h1>
        <Link to="/departments/new">
          <button> Add New Department</button>
        </Link>
        <div>
          {this.renderDepartments() }
        </div>
      </div>
    )
  }
}

export default Departments;

//STYLES 