import React,{createContext} from 'react'
import Theme from './Theme'

type ThemeContextProviderProps ={
  children: React.ReactNode
}

export const ThemeContext = createContext(Theme)

const ThemeContextProvider = ({children}: ThemeContextProviderProps)  =>
 {
  return (
    <div>
      <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider> 
    </div>
  )
}

export default ThemeContextProvider