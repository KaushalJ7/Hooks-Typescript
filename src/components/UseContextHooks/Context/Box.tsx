import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContextProvider'

const Box = () => {
  const Theme =useContext(ThemeContext)
  return (
   
    <div 
    style={{backgroundColor:Theme.primary.main, color: Theme.secondary.text}}
    >Theme context</div>
  )
}

export default Box