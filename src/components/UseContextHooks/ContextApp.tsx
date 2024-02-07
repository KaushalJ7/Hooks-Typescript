import React from 'react'
import ThemeContextProvider from './Context/ThemeContextProvider'
import Box from './Context/Box'
import UserContextProvider from './Context/UserContext'
import UserFutureValue from '../UseStateHooks/UseState/UserFutureValue'

const ContextApp = () => {
  return (
    <div>
        <ThemeContextProvider>
            <Box/>
        </ThemeContextProvider>
        <UserContextProvider>
            <UserFutureValue/>
        </UserContextProvider>
    </div>
  )
}

export default ContextApp