import React, {useState} from "react";
import { BiUser } from "react-icons/bi";
import { TbMushroom } from "react-icons/tb";
import DropDownItem from "./components/DropDownItem";

function App() {
  const [show, toggleShow] = useState(false);

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
                  <TbMushroom />
                </div>
                <h4 className="text-[16px] lowercase tracking-tight font-thin">
                  cogumelo
                  <span className="text-[18px] uppercase tracking-wider font-normal">
                    TRINDADE
                  </span>{" "}
                </h4>
              </div>
              {/* user-icon */}
              <div
                className="flex justify-end"
                onClick={() => toggleShow(!show)}
              >
                <BiUser />
                {show && "bg-teal-400"}
              </div>
              {/* Dropdown Menu */}
              {show && (
                <div className="bg-white w-[200px] rounded-md p-4 top-[100px]">
                  <h3 className="text-lg font-bold text-purple-600">
                    Mr. Kills
                  </h3>
                  <h3 className="text-gray-500 border-b-[2px] border-b-gray-300">
                    Front-end Developer
                  </h3>
                  <ul className="">
                    <DropDownItem image={BiUser} text="My Profile" />
                    <DropDownItem image={BiUser} text="Inbox" />
                    <DropDownItem image={BiUser} text="Settings" />
                    <DropDownItem image={BiUser} text="Edit Profile" />
                    <DropDownItem image={BiUser} text="Help" />
                    <DropDownItem image={BiUser} text="Logout" />
                  </ul>
                </div>
              )}
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


