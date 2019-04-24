import React, { Component } from "react";
import { Consumer } from "../../context";
// import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios'

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    const { name, email, phone } = this.state;

    // Check for errors
    if (name === "") {
      this.setState({
        errors: {name: "Name field is required"}
      });
      return;
    }

    if (email === "") {
      this.setState({
        errors: {email: "Email field is required"}
      });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: {phone: "Phone field is required"}
      });
      return;
    }

    const newContact = {
      // id: uuid,
      name,
      email,
      phone
    };

    // axios.post('https://jsonplaceholder.typicode.com/users', newContact)
    //   .then(response => dispatch({
    //     type: "ADD_CONTACT",
    //     payload: response.data
    //   }))
    // I am here
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
      
    dispatch({
        type: "ADD_CONTACT",
        payload: res.data
      })
      

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
              <div className="card-header">Add Contact</div>
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
                    Add Contact
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

export default AddContact;


