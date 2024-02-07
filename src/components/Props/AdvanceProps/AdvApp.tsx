import React from 'react'
import Status from './Status'
import Heading from './Heading'
import Oscar from './Oscar'
// import TypingProps from '../TypingProps/TypingProps'
import BasicProps from '../BasicProps/BasicProps'

const AdvApp = () => {
  return (
    <div className='AdvApp'>
    <Status status='loading'/>  
    <Heading>Placeholder text</Heading>  
    <Oscar><Heading>Oscar goes to Veer Joshi</Heading></Oscar>
    <BasicProps name ='KJ'   isLoggedIn={true} />
    </div>
  )
}

export default AdvApp