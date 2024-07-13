import { useState, useCallback } from "react";
import Callbackchild from "./callbackchild";
const WithuseCallback = () => {
  const [flag, setFlag] = useState(0);
  const handlecallback = useCallback(() => {
    setFlag((flag) => flag + 1);
  }, []);
  return (
    <>
      <h1>Callbackdemo</h1>
      {flag}
      <button onClick={handlecallback}></button>
      <Callbackchild data={handlecallback} />
    </>
  );
};

export default WithuseCallback;
