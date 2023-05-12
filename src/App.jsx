// import TestApp from "./components/TestApp";
import Spinner from "./components/Spinner";
import NavBar from "./components/NavBar";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Prices from "./pages/Prices";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/prices",
        element: <Prices />
      },
      {
        path: "/delivery",
        element: <Delivery />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },
]);

function App() {

  return (
    <div className="bg-[#130114] h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


