import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context';
import axios from 'axios'

export class Contact extends Component {

  state = {
    showContactInfo: false
  }

  onShowClick = (e) => {
    this.setState({
      showContactInfo: !this.state.showContactInfo  // like toggle
    })

    e.preventDefault()
  }

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }

  render() {
  // console.log('Contact', this.props.contact)
  const { name, email, phone, id } = this.props.contact

    return (

      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className='card card-body mb-3' >
              <h4>{name}
                <i  
                  onClick={this.onShowClick} 
                  className='fas fa-sort-down ml-3'
                  style={{cursor: 'pointer'}}
                >
                </i>
                <i className='fas fa-times'
                    style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                </i>
              </h4>
              {
                this.state.showContactInfo
                ? (<ul className='list-group'>
                    <li className='list-group-item'>Email: {email}</li>
                    <li className='list-group-item'>Phone: {phone}</li>
                  </ul>)
                  : null
              }
            </div>
          )
        }}
      </Consumer>
      )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,

}

export default Contact

