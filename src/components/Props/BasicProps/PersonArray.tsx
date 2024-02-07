import React from 'react'
import {Name} from '../Person.types'
type nameListProps = {
    // names:{
    //     first:string
    //     last: string
    // }[]
    names:Name[]
}
const PersonArray = (props: nameListProps) => {
  return (
    <div>{
        props.names.map((name)=>{
            return (
                <h2 key ={name.first}>
                    {name.first} {name.last}
                </h2>
            )
        })}
        
        
    </div>
  )
}

export default PersonArray