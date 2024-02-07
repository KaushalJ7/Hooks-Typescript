import React from 'react'
import BasicProps from './BasicProps'
import Person from './Person'
import PersonArray from './PersonArray'

const BasicPropsApp = () => {
    const personName ={
        first: 'Veer',
        last: 'Joshi'
    }
 const nameListArray =[
    {
        first:'PK',
        last: 'Joshi'
    },
    {
        first:'VP',
        last:'Joshi'
    },
    {
        first:'VJ',
        last:'Joshi'
    }
]

  return (
    <div className='BasicApp'>
    <BasicProps name = 'VJ' 
     messages = {20} 
     isLoggedIn= {false} />
     <Person name= {personName} />
    <PersonArray names ={nameListArray}/>
     </div>
  )
}

export default BasicPropsApp