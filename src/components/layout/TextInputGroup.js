import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => (
  <div className='form-group'>
    <label htmlFor={name}>{label}</label>
    <input
        className={classnames(
          'form-control form-control-lg', // existing classes
          {'is-invalid': error}  // object class additinonl
        )}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
    {
      error && <div className='invalid-feedback'>{error}</div>
    }
  </div>
) 
 
export default TextInputGroup

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

TextInputGroup.defaultProps = {
  type: 'text'
}
