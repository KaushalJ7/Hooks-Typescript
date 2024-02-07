import React from 'react'
type InputProps={
    value: string,
    handleChange: (event:React.ChangeEvent<HTMLInputElement>)=> void
}
//destructuring props
const Input = ({value, handleChange}:InputProps) => {
// const Input = (props: InputProps) => {
    // const  handleInputChange= (event:React.ChangeEvent<HTMLInputElement>)=> {
    //     console.log(event)
    // }
    return (
        <div><input type='text' value={value} onChange={handleChange}/></div>
    // <div><input type='text' value={props.value} onChange={props.handleChange}/></div>
    // <div><input type='text' value={props.value} onChange={handleInputChange}/></div>
    )
}

export default Input