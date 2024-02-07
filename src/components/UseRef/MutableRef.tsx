import React,{useState, useRef, useEffect} from 'react'

const MutableRef = () => {
    const [timer, setTimer] = useState(0);  //keep track of number of seconds

    const intervalRef  = useRef<number | null>(null) //ref stored

    const stopTimer=()=> {
        if (intervalRef.current)
        window.clearInterval(intervalRef.current)
    }
    //component mount increase set value by 1
    //set Timer value store in IntervalRef
    useEffect(()=>{
        intervalRef.current = window.setInterval(()=>{
            setTimer((timer)=> timer + 1)
        }, 1000)
        //clear timer by stopTimer
    
        return () =>{
            stopTimer()
        }
    },[])
  return (
    <div>
        HookTimer - {timer} -
            <button onClick={() => stopTimer()}> Stop Timer</button>
        
        
    </div>
  )
}

export default MutableRef