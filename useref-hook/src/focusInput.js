import React, {useRef,useState} from "react";

function FocusInput() {
const [name,setName]=useState("");    
const inputRef=useRef();




  return (
    <div>
    Name:
      <input ref={inputRef} type="text" value={name} onChange={e=>setName(e.target.value)}/>
      <div>My name is {name}</div>
      <button onClick={()=>{inputRef.current.focus()}}>Click to Focus</button>
      
    </div>
  );
}
export default FocusInput;
