import React from 'react'
type GreetProps ={
    name:string
}
const TypingProps = (props :GreetProps) => {
  return (
    <div>Welcome '{props.name}' ! You have 10 unread messages.</div>
  )
}

export default TypingProps;
