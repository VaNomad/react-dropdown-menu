import React from "react";
import {BiUser} from "react-icons/bi"
import { TbMushroom } from "react-icons/tb";


function App() {
  return (
    <div className="bg-[#130114] h-screen">
      <div className="flex flex-col p-6">
        <div className="text-white text-4xl font-bold uppercase tracking-widest ">
          <div className="w-full flex flex-col px-2">
            {/* header-nav */}
            <div className="flex justify-between my-5">
              {/* logo */}
              <div className="flex">
                <div>
                  <TbMushroom  />
                </div>
                <h4 className="text-[16px] lowercase tracking-tight font-thin">
                  cogumelo<span className="text-[18px] uppercase tracking-wider font-normal">TRINDADE</span>{" "}
                </h4>
              </div>
              {/* user-icon */}
              <div className="flex justify-end">
                <BiUser />
              </div>
            </div>
            <div>
              <p className="flex justify-center my-5">Mushrooms</p>
            </div>
          </div>
        </div>
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
