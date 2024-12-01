import { useState, useEffect } from "react";

export default function QuestionTimer({onTimeout, timeout,  mode}) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        
        return () => {
            clearTimeout(timer)
        }
    }, [timeout, onTimeout]);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevReaminingTime => prevReaminingTime - 100);
        }, 100);

       return () => {
        clearInterval(interval)
       }
    }, []);

    

    return (
        <progress id ="question-time" max={timeout} value={remainingTime} className={mode}/>
    )
}