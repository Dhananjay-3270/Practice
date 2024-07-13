import "./App.css";

import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <Link to="deb">
        {" "}
        <button>Debounce1</button>
      </Link>
      <Link to="deb2">
        {" "}
        <button>Debounce2</button>
      </Link>

      <Link to="callback">
        {" "}
        <button>WithoutuseCallback</button>
      </Link>
      <Link to="usecallback">
        {" "}
        <button>useCallback</button>
      </Link>
    </>
  );
}

export default App;
