import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./RTL.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import router from "./Routers/router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
