import { useState } from "react";
function Counter(){
    const[count, setCount] = useState(0);
    function addClick(){
        setCount(count+1);
    }
    function subClick(){
        setCount(count-1);
    }
    function resetClick(){
        setCount(0);
    }
     
    return(
        <>
        <div id="box">
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={addClick}>+</button>
            <button onClick={resetClick}>Reset</button>
            <button onClick={subClick}>-</button>
        </div>
        </>
    )

}
export default Counter;