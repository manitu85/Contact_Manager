import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddContact extends Component {
  constructor(props) {
    super(props)
  
    this.inputNameRef = React.createRef();
    this.inputEmailRef = React.createRef();
    this.inputPhoneRef = React.createRef();
   
  }
  
  static defaultProps = {
    name: 'Aleks Burke',
    email: 'burke@yahoo.com',
    phone: '+381 64 555-222-9'
  }

  onSubmit = e => {
    const contact = {
      name: this.inputNameRef.current.value,
      email: this.inputEmailRef.current.value,
      phone: this.inputPhoneRef.current.value,
    }

    e.preventDefault()
    console.log(contact);
  }

  render() {
   const { name, email, phone } = this.props
    return (
      <div className='card mb-3'>
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>

          <form onSubmit={this.onSubmit}>

            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                className='form-control form-control-lg'
                placeholder='Enter Name...'
                type='text'
                name='name'
                defaultValue={name}
                ref={this.inputNameRef}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                className='form-control form-control-lg'
                placeholder='Enter Email...'
                type='email'
                name='email'
                defaultValue={email}
                ref={this.inputEmailRef}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <input
                className='form-control form-control-lg'
                placeholder='Enter Phone'
                type='text'
                name='phone'
                defaultValue={phone}
                ref={this.inputPhoneRef}
              />
            </div>

            <button
              type="submit"
              className="btn btn-danger">Add Contact
            </button>

          </form>
        </div>
      </div>
    )
  }
}

export default AddContact


