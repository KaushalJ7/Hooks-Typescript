import React from 'react'
import {Privates } from './Privates'
import Profile from  './Profile'
const ComponentApp = () => {
  return (
    <div>
       
        <Privates isLoggedIn={true}  component={Profile} />
    </div>
  )
}

export default ComponentApp