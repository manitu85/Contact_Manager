import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Header = ({brand}) => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark mb-3 py-2'>
      <div className='container'>
        <a href='/' className='navbar-brand' style={{headingStyle}}>{brand}</a>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              
              <Link to='/' className='nav-link'><i className='fas fa-home'></i> Home</Link>
            </li>
            <li className='nav-item'>
              
              <Link to='/contact/add' className='nav-link'><i className='fas fa-plus'></i> Add</Link>
            </li>
            <li className='nav-item'>
              
              <Link to='/about' className='nav-link'><i className='fas fa-question'></i> About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  brand: 'My App'
}

Header.propTypes = {
  brand: PropTypes.string.isRequired
}

const headingStyle = {
  color: '#fff', 
  fontSize: '60px',
  fontWeight: 'bold'
}

export default Header


