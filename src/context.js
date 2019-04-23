import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload
        )
      } 

    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }   

    default:
     return state;
  }
}

// As global state (store in redux)
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "joe.d@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Souse",
        email: "karen.s@gmail.com",
        phone: "555-555-4444"
      },
      {
        id: 3,
        name: "Henry Wilams",
        email: "henrr.w@gmail.com",
        phone: "555-555-3333"
      }
    ],

    dispatch: action => this.setState(state => reducer(state, action))
  }

  render() {
    return (
        <Context.Provider value={this.state} >
          { this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
