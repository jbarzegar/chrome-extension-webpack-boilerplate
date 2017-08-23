import React from 'react'
import styled from 'styled-components'
import {
  number,
  string,
  func
} from 'prop-types'

import { Flex } from 'grid-styled'

const Button = styled.button`
  display: flex;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  background: #212121;
  padding: 5px 15px;
  margin: 15px;
  width: 100px;
  align-items: center;
  justify-content: center;
  outline: none;

  &:focus {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
`

const IconAdd = (props) => (
  <svg
    fill={props.fill || '#0000'}
    height={props.size || 24}
    viewBox={`0 0 ${props.size || 24} ${props.size || 24}`}
    width={props.size}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'
    />
    <path
      d='M0 0h24v24H0z'
      fill='none'
    />
  </svg>
)

IconAdd.propTypes = {
  fill: string,
  size: number
}

const IconSub = (props) => (
  <svg
    fill={props.fill || '#0000'}
    height={props.size || 24}
    viewBox={`0 0 ${props.size || 24} ${props.size || 24}`}
    width={props.size}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19 13H5v-2h14v2z'
    />
    <path
      d='M0 0h24v24H0z'
      fill='none'
    />
  </svg>
)

IconSub.propTypes = {
  fill: string,
  size: number
}

const Counter = ({ count, increment, decrement }) => (
  <Flex
    column
    align='center'
    className='Counter'
  >
    <h3 className='h1'>{count}</h3>
    <Flex>
      <Button onClick={decrement}>
        <IconSub fill='#FFF' />
      </Button>
      <Button onClick={increment}>
        <IconAdd fill='#FFF' />
      </Button>
    </Flex>
  </Flex>
)

Counter.propTypes = {
  count: number,
  increment: func,
  decrement: func
}

export default Counter
