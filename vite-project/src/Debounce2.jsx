import { useState } from "react";
const Debounce2 =()=>{
const [name,setName] = useState("")
const[debounce,setDebounce]= useState(0);
const debouncesearch2 =(event,delay)=>{
let val = event.target.value ;
    if(debounce)
{
    clearTimeout(debounce);
}
let timeout = setTimeout(()=>{performsearch2(val)},delay)
setDebounce(timeout);
}
const performsearch2 = (value)=>{
console.log(value);
}
    return (
        <>
<input onChange={(event)=>{debouncesearch2(event,1000)}}/>
        </>
    )
}
export default Debounce2;