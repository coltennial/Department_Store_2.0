import React from 'react'
import axios from "axios"


class DepartmentForm extends React.Component {
  state = { name: "", }

  // componentDidMount() {
  //   const { id } = this.props.match.params
  //   if (id)
  //     axios.get(`/api/departments/${id}`)
  //       .then( res => {
  //         const { name } = res.data
  //         this.setState({ name })
  //       })
  // }

  componentDidMount() {
    if (this.props.match.params.id)
      axios.get(`/api/departments/${this.props.match.params.id}`)
        .then( res => this.setState({ ...res.data }))
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/departments`, { ...this.state })
      .then( res => this.props.history.push(`/departments/${res.data.id}`))
  }

  // handleSubmit = (e) => { 
  //   e.preventDefault() 
  //   if (this.props.edit) {
  //     axios.put(`api/departments/${this.props.match.params.id}`, {...this.state })
  //   } else {
  //     axios.put(`/api/departments`)
  //   }
  // }

  render() {
    const { name, } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          label="Name"
          value={name}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}



export default DepartmentForm