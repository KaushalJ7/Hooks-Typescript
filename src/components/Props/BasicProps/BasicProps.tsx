import React from 'react'
type basicTypeProps = {
    name : string
    messages ?: number
    isLoggedIn: boolean

}
const BasicProps = (props: basicTypeProps) => {
  const {messages = 0} =props
  return (
    <div>
        <h2>
           { props.isLoggedIn ? 
           `Welcome ${props.name} ! You have ${messages} unread messages` 
          //  ` Welcome '${props.name}' ! You have ${props.messages} unread messages.` 
           : 'Welcome Guest!'}
        </h2>
    </div>
  )
}

export default BasicProps