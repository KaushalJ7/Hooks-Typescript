import React from 'react'
import ButtonProps from './ButtonProps'
import Input from './Input'

const EventApp = () => {
  return (
    <div className='EventApp'>
        <ButtonProps handleClick={(event, id) =>{
            console.log('Button clicked', event, id)
        }}/>
        <Input value = '' handleChange={(event)=> console.log(event)}/>
    </div>
  )
}

export default EventApp