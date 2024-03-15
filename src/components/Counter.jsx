import { useState } from "react";

function Counter(){
    const [number, setNumber] = useState(0);

    function handleClick(){
        
       setNumber(number=>number+1);
        console.log(number)
    }

    return(
        <div>
        <h1>{number}</h1>
        <button onClick={handleClick}>ADD</button>
        </div>
    )
}

export default Counter