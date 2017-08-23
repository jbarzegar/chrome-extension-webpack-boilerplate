import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = styled.nav`
  background: #3498db;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  ul {
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0 10px;
  }

  li {
    text-align: center;
    list-style: none;
    color: #FFF;
    padding: 10px;
    flex: 1;
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    outline: none;
  }
`

const Nav = () => (
  <Navbar className='Nav'>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </Navbar>
)

export default connect(state => state)(Nav)
