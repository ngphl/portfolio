/*Import Section */
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./page/Root";
import Home from "./page/Home";
import About from "./page/About";
import Resume from "./page/Resume";
import Portfolio from "./page/Portfolio";
/*Import Section */


/* Create route */
const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={route}/> 
  );
}

export default App;
