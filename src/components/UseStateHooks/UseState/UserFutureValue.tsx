import React,{useState} from 'react'

type AuthUser={
    name:string,
    email: string
}
const UserFutureValue = () => {
    // user is not login by defailt so set initial state is null
    const[user, setUser] =useState<AuthUser | null>(null)
    const handleLogin = () => {
        setUser({name:'Veer',
    email:'VJ@gmail.com'}
    )}
    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}> Login</button>
        <button onClick={handleLogout}> Logout</button>
        <div> User name is {user?.name}</div>
        <div> User email is {user?.email}</div>
    </div>
  )
}

export default UserFutureValue;