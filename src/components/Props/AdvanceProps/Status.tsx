import React from 'react'
type statusProps ={
    status: 'loading' | 'success' | 'error'
}
const Status = (props:  statusProps) => {
  let message
  if(props.status==='loading'){
    message ='loading...'
  } else if (props.status==='success'){
    message='Data Fetched successfully'
  }else if (props.status==='error'){
    message= 'Error fetching data'
  }
    return (
    <div>
        <h2>Status - {message} </h2>
        
    </div>
  )
}

export default Status