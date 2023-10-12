import React, {useRef,useState} from "react";

export default function NoRender() {
    const [count,setcount]=useState(0);    
    const countRef=useRef(0);
   
    const handleClick=()=>{
        setcount(count+1);
    }
   const handleRef=()=>{
      countRef.current++;
   }
    return(
        <div>
            <p>{`Count Value ${count}`}</p>
            <button onClick={handleClick}>Click</button>
            <p>{`Ref value ${countRef.current}`}</p>
            <button onClick={handleRef}>Ref</button>
        </div>

    )
}