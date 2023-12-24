import React, {useState,useMemo,useCallback} from 'react';

const calculate = (num) => {
    console.log("Calculating.....",num)
    return num * num
}

function SquareCalculator({number}){

    const memoizedCalculate = useCallback(calculate,[])

    const square = useMemo(() => memoizedCalculate(number) ,[number])

    return (
        <div>
            <p>Number: {number}</p>
            <p>Square: {square}</p>
        </div>
    )

}

function CallbackComponent(){
    const [value,setValue] = useState(5)

    return(
        <div>
            <input type="number" value={value} 
            onChange={(e) => setValue(e.target.value)}/>
            <SquareCalculator number={value}/>
        </div>
    )

}


export default CallbackComponent;