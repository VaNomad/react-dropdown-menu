import TestApp from "./components/TestApp";
import Spinner from "./components/Spinner";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Prices from "./pages/Prices";


function App() {

  return (
    <div className="bg-[#130114] h-screen">
      {/* Spinner */}
      <Spinner />

      {/* Container */}
      <div className="flex flex-col p-6">

        {/* Header Container */}
        <div className="text-white text-4xl font-bold uppercase tracking-widest ">

          {/* Header */}
          <div className="w-full flex flex-col px-2">

            {/* NavBar */}
            <NavBar />

            {/* Routes */ }
            <div className="">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/prices" element={<Prices />} />
              </Routes>
            </div>

          </div>
        </div>

        {/* Test Menu */}
        <div>
          <TestApp />
        </div>

        

      </div>

    </div>
  );
}

export default App;


