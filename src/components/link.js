import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

const LinkWithStyle = ({ to,  children }) => (
  <Link 
    to={to} 
    className='a'
  >
    {children}
  </Link>
)

export default LinkWithStyle