import React, {useState} from "react";
import TestApp from "./components/TestApp";
import { Route, Routes, Link } from "react-router-dom";
import Spinner from "./components/Spinner";
import NavBar from "./components/NavBar";

function App() {
  const [show, toggleShow] = useState(false);

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
            <Routes>
              <Route path="/" element={<}
                
            </Routes>

            <div>
              <p className="flex justify-center my-5">Mushrooms</p>
            </div>
          </div>
        </div>

        {/* Test Menu */}
        <div>
          <TestApp />
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center">
          <div className="card-zoom">
            <div className="card-zoom-image bg-whiteButton"></div>
            <h1 className="card-zoom-text mb-[80px]">WHITE</h1>
            <h1 className="card-zoom-text mt-[70px]">BUTTONS</h1>
          </div>
          <div className="card-zoom">
            <div className="card-zoom-image bg-crimini"></div>
            <h1 className="card-zoom-text">CRIMINI</h1>
          </div>
          <div className="card-zoom">
            <div className="card-zoom-image bg-shiitake"></div>
            <h1 className="card-zoom-text">SHIITAKE</h1>
          </div>
          <div className="card-zoom">
            <div className="card-zoom-image bg-enoki scale-[135%]"></div>
            <h1 className="card-zoom-text">ENOKI</h1>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;


