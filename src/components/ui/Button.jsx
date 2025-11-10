import React from 'react'

const Button = (props) => {
  return (
    <button className='py-6 px-10 border rounded-full text-xl'>{props.text}</button>
  )
}

export default Button