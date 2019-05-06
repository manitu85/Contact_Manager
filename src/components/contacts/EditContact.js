import React, { Component } from "react";
import { Consumer } from "../../context";
// import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios'

export class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    const contact = response.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    })
  }
  

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    const { name, email, phone } = this.state;

    // Check for errors
    if (name === "") {
      this.setState({
        errors: { name: "Name field is required" }
      });
      return;
    }

    if (email === "") {
      this.setState({
        errors: { email: "Email field is required" }
      });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: { phone: "Phone field is required" }
      });
      return;
    }

    const updateContact = {
      name, 
      email, 
      phone
    }

    const { id } = this.props.match.params;
  
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
      .then(response => dispatch({
        type: 'UPDATE_CONTACT',
        payload: response.data
      }))


    // Clear state 
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    e.preventDefault();
    this.props.history.push('/'); // Redirect to home page
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    className="form-control form-control-lg"
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    className="form-control form-control-lg"
                    label="Email"
                    name="email"
                    placeholder="Enter Email..."
                    type="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    className="form-control form-control-lg"
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <button type="submit" className="btn btn-danger">
                    Update Contact
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;


