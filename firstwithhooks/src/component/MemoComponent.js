import React, {useState,useMemo} from 'react';

const calculate = (num) => {
    console.log("Calculating.....",num)
    return num * num
}

function SquareCalculator({number}){


    const square = useMemo(() => calculate(number) ,[number])

    return (
        <div>
            <p>Number: {number}</p>
            <p>Square: {square}</p>
        </div>
    )

}

function MemoComponent(){
    const [value,setValue] = useState(5)

    return(
        <div>
            <input type="number" value={value} 
            onChange={(e) => setValue(e.target.value)}/>
            <SquareCalculator number={value}/>
        </div>
    )

}


export default MemoComponent;