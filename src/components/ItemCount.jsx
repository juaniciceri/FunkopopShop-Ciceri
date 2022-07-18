import { useState } from "react";
import React from "react";

const ItemCount = () => {
    const [count, setCount] = useState(0);
    const registrarClick = (operacion) => {
        if(operacion==="-") {
            setCount(count-1);
        } else {
            setCount(count+1);
        }
    };
    return ( 
        <>
        <button onClick={() => registrarClick("-")} disabled={count === 0}>-</button>
        {count}
        <button onClick={() => registrarClick("+")} disabled={count === 13}>+</button>
        <button onClick={() => setCount(0)}>Añadir al carrito</button>
        </>
     );
}
 
export default ItemCount;