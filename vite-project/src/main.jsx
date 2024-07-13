import { createBrowserRouter, RouterProvider ,Link} from "react-router-dom";
import Debounce from './Debounceusingref'
import Debounce2 from "./Debounce2.jsx";
import Usecallbackdemo from "./Usecallbackdemo.jsx";
import WithuseCallback from "./Withusecallback.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
   
  },
  {
    path: "/deb",
    element: <Debounce/>,
  },
  {
    path: "/deb2",
    element: <Debounce2/>,
  }
  ,
  {
    path: "/callback",
    element:<Usecallbackdemo/> ,
  } ,
  {
    path: "/usecallback",
    element:<WithuseCallback/> ,
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
