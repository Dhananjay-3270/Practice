import { useState } from "react";
import Callbackchild from "./callbackchild";

const Usecallbackdemo = () => {
  const [flag, setFlag] = useState(0);
  const handlecallback = () => {
    setFlag((flag) => flag + 1);
  };
  return (
    <>
      {flag}
      <h1>Callbackdemo</h1>
      <button onClick={() => handlecallback()}></button>
      <Callbackchild data={handlecallback} />
    </>
  );
};
export default Usecallbackdemo;
