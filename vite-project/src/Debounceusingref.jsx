import { useState,useEffect,useRef } from "react"

 const Debounce =()=>{
    const [name,setName] = useState("");
    const debounce = (fn,delay)=>{
        let timeout ;
        return function(...arg){
        if(timeout)
        {
            clearTimeout(timeout);
        }
       timeout = setTimeout(()=>fn(...arg),delay)
        }
        }
        const handlesearch = (search)=>{
            console.log(search,"delayed")
        }
        const debouncesearch =useRef( debounce(handlesearch,2000)).current;
useEffect(()=>{if(name)
{
    debouncesearch(name);
}
},[name,debouncesearch]);

  return (
    <>
      <input onChange={(e)=>setName((e.target.value))}/>     
    </>
  )
}
export default Debounce