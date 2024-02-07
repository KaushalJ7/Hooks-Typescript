import React from 'react'
import LoggedIn from './LoggedIn'
import UserFutureValue from './UserFutureValue'
import UserAssertion from './userAssertion'

const LoggedApp = () => {
  return (
    <div>
        <LoggedIn/>
        <UserFutureValue/>
        <UserAssertion />
    </div>
  )
}

export default LoggedApp