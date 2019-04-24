import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ value, onChange, options }) => (
  <div>
    <h1>Redux Async + CircleCI</h1>
    <span>
      <h3>{value}</h3>
      <select onChange={e => onChange(e.target.value)}
              value={value}>
        {options.map(option =>
          <option value={option} key={option}>
            {option}
          </option>)
        }
      </select>
    </span>
  </div>
)

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker
