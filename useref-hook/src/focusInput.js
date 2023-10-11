import React, {useRef,useState,useEffect} from "react";

function FocusInput() {
const [name,setName]=useState("");    
const inputRef=useRef();
const count=useRef(1);

useEffect(()=>{
count.current=count.current+1;
});

  return (
    <div>
    Name:
      <input ref={inputRef} type="text" value={name} onChange={e=>setName(e.target.value)}/>
      <div>My name is {name}</div>
      <button onClick={()=>{inputRef.current.focus()}}>Click to Focus</button>
      <div>This has been rendered {count.current} times</div>
    </div>
  );
}
export default FocusInput;
