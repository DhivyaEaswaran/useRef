import React, { useState, useEffect, useRef } from "react";

export default function PreviousState() {
  const [value, SetValue] = useState("");
  const preValue = useRef("");

  useEffect(()=>{
    preValue.current=value
},[value]);

  return(
    <div>
        <input type="text" onChange={(e)=>SetValue(e.target.value)}></input>
        <p>Current value {value}</p>
        <p>Previous value {preValue.current}</p>
    </div>
  )
}
