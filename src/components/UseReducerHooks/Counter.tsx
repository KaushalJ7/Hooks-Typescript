import React , {useReducer } from 'react'

type CounterState={
    count: number
}
type CounterAction={
    type: string;
    payload: number
}
const initialState = {count: 0}
//reducer for updating the state also for where prev state require
//accept 2parameter state and action
function reducer (state: CounterState, action:CounterAction){
    // action.type update count value
    switch (action.type){
        case 'increment': 
            return {count: state.count + action.payload}
        case 'decrement':
            return { count: state.count - action.payload}
        default:
            return state
    }
}
const Counter = () => {
    const [state, dispatch]= useReducer(reducer, initialState)
  return (
    <div>
        Count: {state.count}
        <button onClick ={() => 
            dispatch({type: 'increment', payload: 10 })
            }>Increment 10
        </button>
        <button onClick ={() => 
            dispatch({type: 'decrement', payload: 10 })
            }>Decrement 10
        </button>
    </div>
  )
}

export default Counter