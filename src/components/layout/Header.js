import React from 'react'
import PropTypes from 'prop-types'


const Header = ({brand}) => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark mb-3 py-2'>
      <div className='container'>
        <a href='/' className='navbar-brand' style={{headingStyle}}>{brand}</a>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a href='/' className='nav-link'>Home</a>
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


