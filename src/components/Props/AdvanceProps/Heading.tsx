import React from 'react'
type headingProps={
    children:string
}
const Heading = (props: headingProps) => {
  return (
    <div><h2>{props.children}</h2></div>
  )
}

export default Heading