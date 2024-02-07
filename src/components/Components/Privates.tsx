import React from 'react'
import Login from './Login'
import {ProfileProps} from './Profile'
type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}
export const Privates = ({isLoggedIn, component:Component}: PrivateProps) => {
 
    if(isLoggedIn){
    return (<Component name='Jk' />)
  }
  else{
       return  (
        
             <Login />
       )    
  }
}

// export default Private